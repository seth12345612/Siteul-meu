require('dotenv').config();
const crypto = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const app = express();

// Initialize Google OAuth Client
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '49340757719-vls2j7v3ts3egn9fqcdoro2sfapk8mjm.apps.googleusercontent.com';
const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'secret-key-joc-financiar-2026';

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' })); // Increase limit to 10MB for avatar uploads
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static(__dirname));

// Helper for generating JWT
function generateToken(user) {
  return jwt.sign(
    { username: user.username },
    JWT_SECRET,
    { expiresIn: '30d' } // Long-lived token for simple game
  );
}

// Middleware to authenticate JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ success: false, message: 'Autentificare necesară.' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ success: false, message: 'Token invalid sau expirat.' });
    req.user = user;
    next();
  });
}

// SECURE: File path for user data - moved to private data directory
const USERS_FILE = path.join(__dirname, 'data', 'users.json');
const MESSAGES_FILE = path.join(__dirname, 'data', 'messages.json');
const SCORES_FILE = path.join(__dirname, 'data', 'scores.json');

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
    fs.mkdirSync(path.join(__dirname, 'data'));
}

// Function to load users from file
function loadUsers() {
  try {
    if (fs.existsSync(USERS_FILE)) {
      const data = fs.readFileSync(USERS_FILE, 'utf8');
      const users = JSON.parse(data);
      // Backward compatibility: add displayName, avatar, and google_id if missing
      users.forEach(user => {
        if (!user.displayName) {
          user.displayName = user.username;
        }
        if (user.avatar === undefined) {
          user.avatar = null;
        }
        if (!user.google_id) {
          user.google_id = null;
        }
        if (!user.email) {
          user.email = null;
        }
      });
      return users;
    }
  } catch (error) {
    console.error('Error loading users:', error);
  }
  // Return empty array if file doesn't exist or is corrupted
  return [];
}

// Function to load messages
function loadMessages() {
  try {
    if (fs.existsSync(MESSAGES_FILE)) {
      return JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf8'));
    }
  } catch (error) {
    console.error('Error loading messages:', error);
  }
  return [];
}

// Function to load scores
function loadScores() {
  try {
    if (fs.existsSync(SCORES_FILE)) {
      return JSON.parse(fs.readFileSync(SCORES_FILE, 'utf8'));
    }
  } catch (error) {
    console.error('Error loading scores:', error);
  }
  return [];
}

// Function to save messages
function saveMessages(messages) {
  try {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving messages:', error);
  }
}

// Function to save scores
function saveScores(scores) {
  try {
    fs.writeFileSync(SCORES_FILE, JSON.stringify(scores, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving scores:', error);
  }
}

// Function to save users to file
function saveUsers(users) {
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving users:', error);
  }
}

let USERS = loadUsers();
let MESSAGES = loadMessages();
let SCORES = loadScores();

/** Numele de utilizator care are drepturi de admin (același ca în users.json + config.js). */
const ADMIN_USERNAME = (process.env.ADMIN_USERNAME || '').trim();
/** Opțional: cheie lungă și aleatoare; dacă o introduci la prompt în loc de parolă, poți fi admin și fără parolă (ex. cont doar Google). */
const ADMIN_SECRET = (process.env.ADMIN_SECRET || '').trim();

function adminSecretMatches(provided) {
  if (!ADMIN_SECRET || !provided) return false;
  try {
    const a = Buffer.from(ADMIN_SECRET, 'utf8');
    const b = Buffer.from(provided, 'utf8');
    if (a.length !== b.length) return false;
    return crypto.timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

async function assertAdmin(adminUsername, adminPassword) {
  if (!ADMIN_USERNAME) {
    return {
      ok: false,
      status: 503,
      message: 'ADMIN_USERNAME nu este setat în .env pe server.'
    };
  }
  if (!adminUsername || !adminPassword) {
    return { ok: false, status: 400, message: 'Credențiale admin obligatorii.' };
  }
  if (adminUsername !== ADMIN_USERNAME) {
    return { ok: false, status: 403, message: 'Doar administratorul poate face această acțiune.' };
  }
  if (adminSecretMatches(adminPassword)) {
    return { ok: true };
  }
  const adminUser = USERS.find((u) => u.username === adminUsername);
  if (!adminUser || !adminUser.password) {
    return {
      ok: false,
      status: 403,
      message: ADMIN_SECRET
        ? 'Parolă incorectă sau folosește cheia ADMIN_SECRET din .env (pentru cont fără parolă / Google).'
        : 'Contul admin nu are parolă. Setează ADMIN_SECRET în .env și folosește-o la prompt sau adaugă o parolă contului.'
    };
  }
  const valid = await bcrypt.compare(adminPassword, adminUser.password);
  if (!valid) {
    return { ok: false, status: 403, message: 'Parolă sau cheie admin incorectă.' };
  }
  return { ok: true };
}

// Translation Endpoint
app.post('/translate', async (req, res) => {
    const { text, targetLang, apiKey: providedKey } = req.body;
    const apiKey = providedKey || process.env.GOOGLE_TRANSLATE_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'Server configuration error: API Key missing' });
    }

    if (!text || !targetLang) {
        return res.status(400).json({ error: 'Missing text or target language' });
    }

    try {
        // Use dynamic import for node-fetch or native fetch if available (Node 18+)
        // Falling back to https if needed, but assuming fetch is available in modern node
        const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                q: text,
                target: targetLang,
                format: 'text'
            })
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message || 'Translation API Error');
        }

        res.json(data);
    } catch (error) {
        console.error('Translation error:', error);
        res.status(500).json({ error: 'Translation failed: ' + error.message });
    }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = USERS.find(u => u.username === username);
  if (user) {
    if (user.banned) {
      return res.json({
        success: false,
        message: 'Contul este suspendat. Contactează administratorul.'
      });
    }
    if (!user.password) {
      return res.json({
        success: false,
        message: 'Acest cont folosește autentificarea Google.'
      });
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      // Return user settings along with success and JWT token
      const token = generateToken(user);
      return res.json({ 
        success: true,
        token,
        username: user.username,
        displayName: user.displayName || username,
        avatar: user.avatar || null
      });
    }
  }
  res.json({ success: false, message: 'Invalid credentials' });
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({ success: false, message: 'Username and password required.' });
  }
  if (USERS.find(u => u.username === username)) {
    return res.json({ success: false, message: 'Username already exists.' });
  }
  // Password strength check
  const minLength = 8;
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
  if (password.length < minLength) {
    return res.json({ success: false, message: 'Password must be at least 8 characters long.' });
  }
  if (!strongRegex.test(password)) {
    return res.json({ success: false, message: 'Password must include uppercase, lowercase, number, and special character.' });
  }
  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { 
    username, 
    password: hashedPassword,
    displayName: username, // Default display name to username
    avatar: null, // No avatar by default
    banned: false
  };
  USERS.push(newUser);
  saveUsers(USERS);
  res.json({ success: true, message: 'Registration successful!' });
});

// Only return usernames, never passwords
app.get('/users', (req, res) => {
  const userList = USERS.map(user => ({
    username: user.username,
    banned: !!user.banned,
    displayName: user.displayName || user.username
  }));
  res.json({ users: userList, count: USERS.length });
});

// Get user password (Admin only)
app.get('/users/:username/password', (req, res) => {
  const { username } = req.params;
  
  const user = USERS.find(u => u.username === username);
  if (!user) {
    return res.json({ success: false, message: 'User not found.' });
  }
  
  res.json({ 
    success: true, 
    password: user.password,
    isHashed: user.password.startsWith('$2b$')
  });
});

// Delete user endpoint (Admin only)
app.delete('/users/:username', async (req, res) => {
  const { username } = req.params;
  const { adminUsername, adminPassword } = req.body;

  const auth = await assertAdmin(adminUsername, adminPassword);
  if (!auth.ok) {
    return res.status(auth.status).json({ success: false, message: auth.message });
  }

  if (username === ADMIN_USERNAME) {
    return res.json({ success: false, message: 'Nu poți șterge contul administrator.' });
  }

  const userIndex = USERS.findIndex(u => u.username === username);
  if (userIndex === -1) {
    return res.json({ success: false, message: 'User not found.' });
  }

  USERS.splice(userIndex, 1);
  saveUsers(USERS);

  res.json({ success: true, message: `User '${username}' has been deleted by admin '${adminUsername}'.` });
});

// Ban / unban user (Admin only)
app.post('/users/:username/banned', async (req, res) => {
  const { username } = req.params;
  const { adminUsername, adminPassword, banned } = req.body;

  const auth = await assertAdmin(adminUsername, adminPassword);
  if (!auth.ok) {
    return res.status(auth.status).json({ success: false, message: auth.message });
  }

  if (username === ADMIN_USERNAME) {
    return res.json({ success: false, message: 'Nu poți suspenda contul administrator.' });
  }

  const user = USERS.find((u) => u.username === username);
  if (!user) {
    return res.json({ success: false, message: 'Utilizator negăsit.' });
  }

  user.banned = !!banned;
  saveUsers(USERS);

  res.json({
    success: true,
    message: user.banned ? 'Utilizator suspendat.' : 'Suspendare anulată.'
  });
});

// Contact/Message Endpoint
app.post('/contact', async (req, res) => {
    const { name, subject, message } = req.body;
    
    if (!name || !subject || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const newMessage = {
        id: Date.now().toString(),
        name,
        subject,
        message,
        date: new Date().toISOString(),
        read: false
    };

    MESSAGES.push(newMessage);
    saveMessages(MESSAGES);

    res.json({ success: true, message: 'Message sent successfully!' });
});

// Get Messages Endpoint (for admin/settings)
app.get('/contact', (req, res) => {
    // In a real app, you'd verify admin status here
    res.json({ success: true, messages: MESSAGES.reverse() }); // Newest first
});

// Mark message as read
app.post('/contact/:id/read', (req, res) => {
    const { id } = req.params;
    const msg = MESSAGES.find(m => m.id === id);
    if (msg) {
        msg.read = true;
        saveMessages(MESSAGES);
        res.json({ success: true });
    } else {
        res.status(404).json({ success: false, message: 'Message not found' });
    }
});

// Delete message
app.delete('/contact/:id', (req, res) => {
    const { id } = req.params;
    const index = MESSAGES.findIndex(m => m.id === id);
    if (index !== -1) {
        MESSAGES.splice(index, 1);
        saveMessages(MESSAGES);
        res.json({ success: true });
    } else {
        res.status(404).json({ success: false, message: 'Message not found' });
    }
});



app.post('/users/:username/change-username', async (req, res) => {
  const { username } = req.params;
  const { newUsername, password } = req.body;

  if (!newUsername || !password) {
    return res.json({ success: false, message: 'New username and password required.' });
  }

  const user = USERS.find(u => u.username === username);
  if (!user) {
    return res.json({ success: false, message: 'User not found.' });
  }

  // Verify password
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.json({ success: false, message: 'Incorrect password.' });
  }

  // Check if new username is already taken
  if (USERS.find(u => u.username === newUsername)) {
    return res.json({ success: false, message: 'New username already exists.' });
  }

  // Update username (preserve displayName and avatar)
  const oldDisplayName = user.displayName;
  const oldAvatar = user.avatar;
  user.username = newUsername;
  // Keep displayName and avatar if they exist
  if (!user.displayName) {
    user.displayName = oldDisplayName || newUsername;
  }
  if (user.avatar === undefined) {
    user.avatar = oldAvatar;
  }
  saveUsers(USERS);

  res.json({ success: true, message: 'Username changed successfully.', newUsername });
});

// Get user settings
app.get('/users/:username/settings', async (req, res) => {
  const { username } = req.params;
  const user = USERS.find(u => u.username === username);
  
  if (!user) {
    return res.json({ success: false, message: 'User not found.' });
  }
  
  res.json({ 
    success: true,
    displayName: user.displayName || username,
    avatar: user.avatar || null
  });
});

// Update user settings (no password required for display name and avatar)
app.put('/users/:username/settings', async (req, res) => {
  const { username } = req.params;
  const { displayName, avatar } = req.body;
  
  const user = USERS.find(u => u.username === username);
  if (!user) {
    return res.json({ success: false, message: 'User not found.' });
  }
  
  // Update settings (no password verification needed for these non-sensitive changes)
  if (displayName !== undefined) {
    user.displayName = displayName;
  }
  if (avatar !== undefined) {
    user.avatar = avatar; // Can be null to remove avatar
  }
  
  saveUsers(USERS);
  
  res.json({ 
    success: true, 
    message: 'Settings updated successfully.',
    displayName: user.displayName,
    avatar: user.avatar
  });
});

// Save Score Endpoint
app.post('/scores', authenticateToken, (req, res) => {
  const { username, score, months } = req.body;
  
  if (!username || score === undefined || months === undefined) {
    return res.status(400).json({ success: false, message: 'Missing score data.' });
  }

  // Verify that the score is being saved for the authenticated user
  if (req.user.username !== username) {
    return res.status(403).json({ success: false, message: 'Nu poți salva scorul pentru alt utilizator.' });
  }

  const userRecord = USERS.find((u) => u.username === username);
  if (userRecord && userRecord.banned) {
    return res.status(403).json({
      success: false,
      message: 'Contul este suspendat; nu poți salva scoruri.'
    });
  }

  const newScore = {
    username,
    score: parseInt(score),
    months: parseInt(months),
    date: new Date().toISOString()
  };

  SCORES.push(newScore);
  saveScores(SCORES);

  res.json({ success: true, message: 'Score saved successfully!' });
});

// Get Scores Endpoint (Leaderboard)
app.get('/scores', (req, res) => {
  // Sort by score (descending)
  const sortedScores = [...SCORES].sort((a, b) => b.score - a.score);
  // Limit to top 50
  res.json({ success: true, scores: sortedScores.slice(0, 50) });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Delete Score Endpoint (admin only)
app.delete('/scores', async (req, res) => {
  const { username, date, adminUsername, adminPassword } = req.body;

  const auth = await assertAdmin(adminUsername, adminPassword);
  if (!auth.ok) {
    return res.status(auth.status).json({ success: false, message: auth.message });
  }

  if (!username || !date) {
    return res.status(400).json({
      success: false,
      message: 'username and date are required.'
    });
  }

  const scoreIndex = SCORES.findIndex(
    (s) => s.username === username && s.date === date
  );

  if (scoreIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Score not found.'
    });
  }

  const deletedScore = SCORES.splice(scoreIndex, 1)[0];
  saveScores(SCORES);

  res.json({
    success: true,
    message: 'Score deleted successfully.',
    deleted: deletedScore
  });
});

// Google Authentication - Verify Token and Login/Check User
app.post('/google-login', async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.json({ success: false, message: 'Token required.' });
  }

  try {
    // Verify the token
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    const googleId = payload.sub;
    const email = payload.email;
    const displayName = payload.name || email.split('@')[0];

    // Check if user exists with this google_id
    let user = USERS.find(u => u.google_id === googleId);

    if (user) {
      if (user.banned) {
        return res.json({
          success: false,
          message: 'Contul este suspendat. Contactează administratorul.'
        });
      }
      // User exists, login successful
      const token = generateToken(user);
      return res.json({
        success: true,
        message: 'Login successful!',
        token,
        username: user.username,
        displayName: user.displayName || user.username,
        avatar: user.avatar || null,
        isNewUser: false
      });
    }

    // Check if email-based username exists
    const emailBasedUsername = email.split('@')[0];
    if (USERS.find(u => u.username === emailBasedUsername)) {
      // Username exists but not linked to Google
      return res.json({
        success: false,
        message: 'This email is already associated with an account. Please login with your password.',
        googleId,
        email,
        displayName
      });
    }

    // New user - return info for registration form
    res.json({
      success: false,
      isNewUser: true,
      message: 'New user. Please complete registration.',
      googleId,
      email,
      displayName,
      suggestedUsername: emailBasedUsername
    });

  } catch (error) {
    console.error('Google token verification failed:', error);
    res.json({ success: false, message: 'Invalid token or authentication failed.' });
  }
});

// Google Registration - Create new user with custom name choice
app.post('/google-register', async (req, res) => {
  const { googleId, email, displayName, customUsername } = req.body;

  if (!googleId || !email || !displayName) {
    return res.json({ success: false, message: 'Missing required fields.' });
  }

  // Use custom username if provided, otherwise use part of email
  const username = customUsername || email.split('@')[0];

  // Check if username already exists
  if (USERS.find(u => u.username === username)) {
    return res.json({ success: false, message: 'Username already exists. Please try another.' });
  }

  // Create new user with Google login
  const newUser = {
    username,
    password: null, // No password for Google accounts
    google_id: googleId,
    email,
    displayName,
    avatar: null,
    banned: false,
    created_at: new Date().toISOString()
  };

  USERS.push(newUser);
  saveUsers(USERS);

  const token = generateToken(newUser);
  res.json({
    success: true,
    message: 'Registration successful!',
    token,
    displayName: newUser.displayName,
    username: newUser.username
  });
});

// Email Endpoint - Trimite email prin nodemailer
app.post('/trimite-email', async (req, res) => {
  const { nume, email, mesaj } = req.body;

  // Validare date
  if (!nume || !email || !mesaj) {
    return res.status(400).json({ success: false, mesaj: 'Toți parametrii sunt obligatorii.' });
  }

  try {
    // Verificare configurare ÎNAINTE de a crea transportor
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('❌ Email configuration MISSING! Set EMAIL_USER and EMAIL_PASSWORD in .env file');
      return res.status(500).json({ success: false, mesaj: 'Serviciul de email nu este configurat. Contactează administratorul.' });
    }

    // Configurare Nodemailer
    const transportor = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Opțiuni email
    const optiuniEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Trimite la adresa ta
      replyTo: email, // Utilizatorul poate raspunde direct
      subject: `Mesaj nou de la ${nume}`,
      html: `
        <h2>Mesaj din formularul de contact</h2>
        <p><strong>Nume:</strong> ${nume}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <p><strong>Mesaj:</strong></p>
        <p>${mesaj.replace(/\n/g, '<br>')}</p>
      `
    };

    // Trimite email
    const info = await transportor.sendMail(optiuniEmail);
    console.log('Email trimis: ' + info.response);

    // Salveaza mesajul in JSON local
    const noMesaj = {
      id: Date.now().toString(),
      nume,
      email,
      mesaj,
      data: new Date().toISOString(),
      citit: false
    };
    MESSAGES.push(noMesaj);
    saveMessages(MESSAGES);

    res.json({ success: true, mesaj: 'Email trimis cu succes!' });
  } catch (eroare) {
    console.error('Eroare la trimiterea emailului:', eroare);
    res.status(500).json({ success: false, mesaj: 'Eroare la trimiterea emailului: ' + eroare.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
  console.log(`Loaded ${USERS.length} users from storage`);
  if (ADMIN_USERNAME) {
    console.log(`Admin API enabled for username: ${ADMIN_USERNAME}`);
    if (ADMIN_SECRET) {
      console.log('ADMIN_SECRET is set (Google-only admin can use it at the prompt)');
    } else {
      console.log('ADMIN_SECRET not set — admin without password must set it to use admin API');
    }
  } else {
    console.log('Admin API disabled (set ADMIN_USERNAME in .env)');
  }
});



process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
}); 

