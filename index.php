<?php session_start(); ?>
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Joc de Educație Financiară</title>
  <link rel="stylesheet" href="assets/styles.css" />

  <script src="assets/config.js"></script>
  <!-- Google Sign-In Script -->
  <script src="https://accounts.google.com/gsi/client" async defer></script>
  <style>
    /* Stiluri simple pentru autentificare */
    .auth-container {
      position: absolute;
      top: 1rem;
      right: 1rem;
      display: flex;
      gap: 1rem;
      z-index: 100;
    }
    
    .auth-btn {
      background: rgba(30, 58, 138, 0.8);
      color: #93c5fd;
      border: 1px solid #3b82f6;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
      text-decoration: none;
      font-size: 0.9rem;
      transition: all 0.2s;
    }
    
    .auth-btn:hover {
      background: rgba(30, 58, 138, 1);
      color: white;
    }

    .user-welcome {
      color: #93c5fd;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    /* Modal Auth */
    #auth-modal .modal-content {
      max-width: 400px;
    }
    
    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .auth-form input {
      padding: 0.8rem;
      border-radius: 0.5rem;
      border: 1px solid #475569;
      background: #1e293b;
      color: white;
    }
    
    .auth-tabs {
      display: flex;
      margin-bottom: 1rem;
      border-bottom: 1px solid #475569;
    }
    
    .auth-tab {
      flex: 1;
      padding: 0.8rem;
      text-align: center;
      cursor: pointer;
      color: #94a3b8;
    }
    
    .auth-tab.active {
      color: #60a5fa;
      border-bottom: 2px solid #60a5fa;
      font-weight: bold;
    }
    
    .hidden-form {
      display: none;
    }
    
    .auth-message {
      margin-top: 1rem;
      font-size: 0.9rem;
      text-align: center;
    }
    
    .success { color: #4ade80; }
    .error { color: #f87171; }

    /* Google Sign-In Button Styling */
    .google-divider {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 1rem 0;
      font-size: 0.85rem;
      color: #94a3b8;
    }

    .google-divider::before,
    .google-divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: #475569;
    }

    .google-btn-container {
      display: flex;
      justify-content: center;
    }

    #g_id_onload {
      display: none;
    }

    .custom-google-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      width: 100%;
      padding: 0.8rem;
      background: rgba(66, 133, 244, 0.15);
      color: #60a5fa;
      border: 1px solid #60a5fa;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 0.95rem;
      transition: all 0.2s;
      font-weight: 500;
    }

    .custom-google-btn:hover {
      background: rgba(66, 133, 244, 0.25);
      color: #93c5fd;
    }

    .google-icon {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .google-icon img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .admin-panel .admin-users-table {
      width: 100%;
      font-size: 0.85rem;
      border-collapse: collapse;
      margin-top: 0.75rem;
    }
    .admin-panel .admin-users-table th,
    .admin-panel .admin-users-table td {
      padding: 0.4rem 0.35rem;
      text-align: left;
      border-bottom: 1px solid rgba(55, 65, 81, 0.6);
    }
    .admin-panel .admin-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem;
    }
    .admin-panel .btn-admin {
      font-size: 0.72rem;
      padding: 0.2rem 0.45rem;
      border-radius: 0.35rem;
      cursor: pointer;
      background: transparent;
      border: 1px solid #64748b;
      color: #cbd5f5;
    }
    .admin-panel .btn-admin:hover {
      border-color: #93c5fd;
      color: #93c5fd;
    }
    .admin-panel .btn-admin-warn {
      border-color: #fbbf24;
      color: #fcd34d;
    }
    .admin-panel .btn-admin-danger {
      border-color: #f87171;
      color: #fca5a5;
    }
    .leaderboard-table .col-admin {
      white-space: nowrap;
    }
  </style>
  <script>
    const API_URL = window.CONFIG?.API_URL || 'http://localhost:3000';
    const ADMIN_USER = (window.CONFIG && window.CONFIG.ADMIN_USERNAME) || '';

    function escapeHtml(text) {
      const d = document.createElement('div');
      d.textContent = text == null ? '' : String(text);
      return d.innerHTML;
    }

    // Definim funcțiile global pentru a fi disponibile imediat
    window.openDifficultyModal = function() {
      const modal = document.getElementById('difficulty-modal');
      const selectedScenario = document.querySelector('input[name="scenario"]:checked');
      
      if (!selectedScenario) {
        alert("Te rugăm să alegi un scenariu mai întâi!");
        return;
      }

      const scenarioKey = selectedScenario.value;
      // Verificăm dacă gameConfig este încărcat
      if (!window.gameConfig || !window.gameConfig.startConfig) {
        console.error("Configurația jocului (gameConfig) nu a fost găsită!");
        alert("Eroare: Configurația jocului nu s-a putut încărca. Te rugăm să reîncarci pagina.");
        return;
      }

      const startConfig = window.gameConfig.startConfig;
      const config = startConfig[scenarioKey];

      if (config) {
        // Actualizăm valorile în modal
        document.getElementById('diff-usor-bani').innerHTML = `💰 <strong>Bani:</strong> ${config.usor.bani} RON`;
        document.getElementById('diff-usor-fericire').innerHTML = `😊 <strong>Fericire:</strong> ${config.usor.fericire}`;
        
        document.getElementById('diff-mediu-bani').innerHTML = `⚖️ <strong>Bani:</strong> ${config.mediu.bani} RON`;
        document.getElementById('diff-mediu-fericire').innerHTML = `😊 <strong>Fericire:</strong> ${config.mediu.fericire}`;
        
        document.getElementById('diff-greu-bani').innerHTML = `📉 <strong>Bani:</strong> ${config.greu.bani} RON`;
        document.getElementById('diff-greu-fericire').innerHTML = `😊 <strong>Fericire:</strong> ${config.greu.fericire}`;
      } else {
        console.error("Nu s-a găsit configurația pentru scenariul:", scenarioKey);
      }

      if (modal) {
        modal.classList.remove('hidden');
      } else {
        console.error("Modalul 'difficulty-modal' nu a fost găsit!");
      }
    };

    window.closeDifficultyModal = function() {
      const modal = document.getElementById('difficulty-modal');
      if (modal) {
        modal.classList.add('hidden');
      }
    };

    window.selectDifficulty = function(difficulty) {
      const form = document.getElementById('scenario-form');
      const hiddenDiff = document.getElementById('hidden-difficulty');
      if (hiddenDiff && form) {
        hiddenDiff.value = difficulty;
        form.submit();
      }
    };

    // Informații despre dificultăți
    const difficultyInfo = {
      usor: {
        titlu: "Dificultate: UȘOR",
        detalii: `
          <strong>Ce se schimbă:</strong>
          <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
            <li><strong>Venituri lunare:</strong> +30% (mai mulți bani)</li>
            <li><strong>Fericire/Energie:</strong> +30% (recuperezi mai ușor)</li>
            <li><strong>Bani de start:</strong> +30% (începi cu mai mulți)</li>
            <li><strong>Impactul deciziilor:</strong> Deciziile greșite te costă mai puțin</li>
          </ul>
          <strong style="display: block; margin-top: 1rem; color: #93c5fd;">🎯 Ideal pentru:</strong> Debutanți, testarea mecanicilor, relaxare.
        `
      },
      mediu: {
        titlu: "Dificultate: MEDIU (Normal)",
        detalii: `
          <strong>Ce se schimbă:</strong>
          <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
            <li><strong>Venituri lunare:</strong> Normale</li>
            <li><strong>Fericire/Energie:</strong> Normale</li>
            <li><strong>Bani de start:</strong> Normali</li>
            <li><strong>Impactul deciziilor:</strong> Echilibrat - consecințele sunt reale</li>
          </ul>
          <strong style="display: block; margin-top: 1rem; color: #93c5fd;">🎯 Ideal pentru:</strong> Experiența standard, jucători moderat experimentați.
        `
      },
      greu: {
        titlu: "Dificultate: GREU (Provocare)",
        detalii: `
          <strong>Ce se schimbă:</strong>
          <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
            <li><strong>Venituri lunare:</strong> -30% (mai puțini bani)</li>
            <li><strong>Fericire/Energie:</strong> -30% (recuperezi mai greu)</li>
            <li><strong>Bani de start:</strong> -30% (începi cu mai puțini)</li>
            <li><strong>Impactul deciziilor:</strong> Greșelile te costă mult - prudență necesară!</li>
          </ul>
          <strong style="display: block; margin-top: 1rem; color: #93c5fd;">🎯 Ideal pentru:</strong> Jucători veterani, cine vrea o provocare reală.
        `
      }
    };

    window.showDifficultyInfo = function(difficulty) {
      const modal = document.getElementById('difficulty-info-modal');
      const title = document.getElementById('info-title');
      const content = document.getElementById('info-content');
      
      if (difficultyInfo[difficulty]) {
        title.textContent = difficultyInfo[difficulty].titlu;
        content.innerHTML = difficultyInfo[difficulty].detalii;
        modal.classList.remove('hidden');
      }
    };

    window.closeDifficultyInfo = function() {
      const modal = document.getElementById('difficulty-info-modal');
      if (modal) {
        modal.classList.add('hidden');
      }
    };

    // Funcții Auth
    window.openAuthModal = function(type) {
      const modal = document.getElementById('auth-modal');
      const loginForm = document.getElementById('login-form');
      const registerForm = document.getElementById('register-form');
      const loginTab = document.getElementById('tab-login');
      const registerTab = document.getElementById('tab-register');
      const message = document.getElementById('auth-message');
      const loginGoogleDivider = document.getElementById('login-google-divider');
      const loginGoogleBtn = document.getElementById('login-google-btn');
      const registerGoogleDivider = document.getElementById('register-google-divider');
      const registerGoogleBtn = document.getElementById('register-google-btn');
      
      if (modal) {
        modal.classList.remove('hidden');
        message.textContent = '';
        message.className = 'auth-message';
        
        if (type === 'register') {
          loginForm.classList.add('hidden-form');
          registerForm.classList.remove('hidden-form');
          loginTab.classList.remove('active');
          registerTab.classList.add('active');
          loginGoogleDivider.style.display = 'none';
          loginGoogleBtn.style.display = 'none';
          registerGoogleDivider.style.display = 'flex';
          registerGoogleBtn.style.display = 'flex';
        } else {
          loginForm.classList.remove('hidden-form');
          registerForm.classList.add('hidden-form');
          loginTab.classList.add('active');
          registerTab.classList.remove('active');
          loginGoogleDivider.style.display = 'flex';
          loginGoogleBtn.style.display = 'flex';
          registerGoogleDivider.style.display = 'none';
          registerGoogleBtn.style.display = 'none';
        }
      }
    };

    window.closeAuthModal = function() {
      const modal = document.getElementById('auth-modal');
      if (modal) modal.classList.add('hidden');
    };

    async function maybeSavePendingScore() {
      const pendingStr = localStorage.getItem('pendingScore');
      if (!pendingStr) return;

      let pending = null;
      try {
        pending = JSON.parse(pendingStr);
      } catch {
        localStorage.removeItem('pendingScore');
        return;
      }

      if (
        !pending ||
        pending.score === undefined ||
        pending.months === undefined
      ) {
        localStorage.removeItem('pendingScore');
        return;
      }

      const username = localStorage.getItem('currentUser');
      if (!username) return;

      try {
        await fetch(`${API_URL}/scores`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username,
            score: pending.score,
            months: pending.months
          })
        });
      } catch (e) {
        // Fail silent: utilizatorul poate încerca din nou
      } finally {
        localStorage.removeItem('pendingScore');
      }
    }

    window.handleAuth = async function(event, type) {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      const messageEl = document.getElementById('auth-message');
      
      try {
        const response = await fetch(`${API_URL}/${type}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        const result = await response.json();
        
        messageEl.textContent = result.message;
        messageEl.className = 'auth-message ' + (result.success ? 'success' : 'error');
        
        if (result.success) {
          if (type === 'login') {
            localStorage.setItem('currentUser', result.username || data.username);
            if (result.displayName) localStorage.setItem('displayName', result.displayName);

            await maybeSavePendingScore();
          }
          setTimeout(() => location.reload(), 1000);
        }
      } catch (e) {
        messageEl.textContent = 'Eroare de conexiune la serverul Node.js (port 3000).';
        messageEl.className = 'auth-message error';
      }
    };

    window.logout = function() {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('displayName');
      location.reload();
    };

    // Google Sign-In handler
    window.handleGoogleLogin = function() {
      // Initialize Google Sign-In
      if (!window.google) {
        setTimeout(window.handleGoogleLogin, 100);
        return;
      }

      google.accounts.id.initialize({
        client_id: '681313505171-djpc5421rlcomedfqujbsu6s3lq3l66e.apps.googleusercontent.com',
        callback: window.handleCredentialResponse
      });

      // Create a hidden container for the button
      let googleBtnContainer = document.getElementById('google-signin-btn-container');
      if (!googleBtnContainer) {
        googleBtnContainer = document.createElement('div');
        googleBtnContainer.id = 'google-signin-btn-container';
        googleBtnContainer.style.display = 'none';
        document.body.appendChild(googleBtnContainer);
      }

      // Render button in the hidden container
      google.accounts.id.renderButton(googleBtnContainer, {
        type: 'standard',
        size: 'large',
        text: 'signin_with',
        locale: 'ro'
      });

      // Click the hidden button to trigger the popup
      const hiddenBtn = googleBtnContainer.querySelector('[role="button"]');
      if (hiddenBtn) {
        hiddenBtn.click();
      }
    };

    // Listen for Google Sign-In response
    window.handleCredentialResponse = async function(response) {
      const messageEl = document.getElementById('auth-message');
      try {
        // Send token to backend for verification
        const verifyResponse = await fetch(`${API_URL}/google-login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: response.credential
          })
        });

        const result = await verifyResponse.json();

        if (result.success) {
          if (!result.username) {
            messageEl.textContent = 'Eroare: serverul nu a trimis username. Repornește backend-ul.';
            messageEl.className = 'auth-message error';
            return;
          }
          localStorage.setItem('currentUser', result.username);
          localStorage.setItem('displayName', result.displayName || result.username || '');
          messageEl.textContent = 'Autentificare reușită!';
          messageEl.className = 'auth-message success';
          await maybeSavePendingScore();
          setTimeout(() => location.reload(), 1000);
        } else if (result.isNewUser) {
          // New user needs to choose a name
          document.getElementById('google-id-hidden').value = result.googleId;
          document.getElementById('google-email-hidden').value = result.email;
          document.getElementById('google-displayname-hidden').value = result.displayName;
          document.getElementById('google-custom-username').value = result.suggestedUsername || '';
          closeAuthModal();
          openGoogleNameModal();
        } else {
          messageEl.textContent = result.message;
          messageEl.className = 'auth-message error';
        }
      } catch (e) {
        messageEl.textContent = 'Eroare de conexiune la serverul Node.js.';
        messageEl.className = 'auth-message error';
      }
    };

    window.handleGoogleRegister = function() {
      if (!window.google) {
        setTimeout(window.handleGoogleRegister, 100);
        return;
      }

      google.accounts.id.initialize({
        client_id: '681313505171-djpc5421rlcomedfqujbsu6s3lq3l66e.apps.googleusercontent.com',
        callback: window.handleCredentialResponse
      });

      // Create a hidden container for the button
      let googleBtnContainer = document.getElementById('google-signup-btn-container');
      if (!googleBtnContainer) {
        googleBtnContainer = document.createElement('div');
        googleBtnContainer.id = 'google-signup-btn-container';
        googleBtnContainer.style.display = 'none';
        document.body.appendChild(googleBtnContainer);
      }

      // Render button in the hidden container
      google.accounts.id.renderButton(googleBtnContainer, {
        type: 'standard',
        size: 'large',
        text: 'signup_with',
        locale: 'ro'
      });

      // Click the hidden button to trigger the popup
      const hiddenBtn = googleBtnContainer.querySelector('[role="button"]');
      if (hiddenBtn) {
        hiddenBtn.click();
      }
    };

    window.openGoogleNameModal = function() {
      const modal = document.getElementById('google-name-modal');
      if (modal) {
        modal.classList.remove('hidden');
      }
    };

    window.closeGoogleNameModal = function() {
      const modal = document.getElementById('google-name-modal');
      if (modal) {
        modal.classList.add('hidden');
      }
    };

    window.submitGoogleRegistration = async function(event) {
      event.preventDefault();
      const googleId = document.getElementById('google-id-hidden').value;
      const email = document.getElementById('google-email-hidden').value;
      const displayName = document.getElementById('google-displayname-hidden').value;
      const customUsername = document.getElementById('google-custom-username').value;
      const messageEl = document.getElementById('google-name-message');

      try {
        const response = await fetch(`${API_URL}/google-register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            googleId,
            email,
            displayName,
            customUsername
          })
        });

        const result = await response.json();
        messageEl.textContent = result.message;
        messageEl.className = 'auth-message ' + (result.success ? 'success' : 'error');

        if (result.success) {
          localStorage.setItem('currentUser', result.username);
          localStorage.setItem('displayName', result.displayName);
          await maybeSavePendingScore();
          setTimeout(() => location.reload(), 1000);
        }
      } catch (e) {
        messageEl.textContent = 'Eroare de conexiune la serverul Node.js.';
        messageEl.className = 'auth-message error';
      }
    };

    window.logout = function() {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('displayName');
      location.reload();
    };

    window.loadLeaderboard = function () {
      const isAdmin = ADMIN_USER && localStorage.getItem('currentUser') === ADMIN_USER;
      const container = document.getElementById('leaderboard');
      fetch(`${API_URL}/scores`)
        .then((r) => r.json())
        .then((data) => {
          if (!data.success || !data.scores || data.scores.length === 0) {
            container.innerHTML =
              '<p class="leaderboard-empty">Încă nu există scoruri salvate. Fii primul care joacă!</p>';
            return;
          }
          let html = `
            <table class="leaderboard-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nume</th>
                  <th>Scor final (RON)</th>
                  <th>Luni</th>
                  ${isAdmin ? '<th class="col-admin">Admin</th>' : ''}
                </tr>
              </thead>
              <tbody>
          `;
          data.scores.forEach((s, i) => {
            const esc = (t) => escapeHtml(t);
            html += `
              <tr>
                <td>${i + 1}</td>
                <td>${esc(s.username)}</td>
                <td>${esc(String(s.score))}</td>
                <td>${esc(String(s.months))}/12</td>
                ${
                  isAdmin
                    ? `<td class="col-admin"><button type="button" class="btn-admin btn-admin-danger" data-del-score="${encodeURIComponent(
                        s.username
                      )}" data-del-date="${encodeURIComponent(s.date)}">Șterge scor</button></td>`
                    : ''
                }
              </tr>
            `;
          });
          html += '</tbody></table>';
          container.innerHTML = html;
          if (isAdmin) {
            container.querySelectorAll('[data-del-score]').forEach((btn) => {
              btn.addEventListener('click', () => {
                window.deleteLeaderboardScore(
                  decodeURIComponent(btn.getAttribute('data-del-score')),
                  decodeURIComponent(btn.getAttribute('data-del-date'))
                );
              });
            });
          }
        })
        .catch(() => {
          container.innerHTML = '<p class="error">Eroare la încărcarea clasamentului.</p>';
        });
    };

    window.deleteLeaderboardScore = async function (username, date) {
      if (!ADMIN_USER) return;
      const adminPassword = await window.requestAdminAuth(
        'Ștergere scor',
        'Pentru a șterge acest scor din clasament, introdu parola admin sau ADMIN_SECRET.'
      );
      if (!adminPassword) return;
      try {
        setAdminStatus('Se șterge scorul…', null);
        const r = await fetch(`${API_URL}/scores`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username,
            date,
            adminUsername: ADMIN_USER,
            adminPassword
          })
        });
        const j = await r.json();
        if (j.success) {
          setAdminStatus(j.message || 'Scor șters.', 'success');
          window.loadLeaderboard();
        } else {
          setAdminStatus(j.message || 'Nu s-a putut șterge scorul.', 'error');
        }
      } catch (e) {
        setAdminStatus('Eroare de rețea la ștergerea scorului.', 'error');
      }
    };

    window.loadAdminUsersPanel = async function () {
      const wrap = document.getElementById('admin-users-wrap');
      if (!wrap) return;
      wrap.innerHTML = '<p class="muted small">Se încarcă utilizatorii…</p>';
      try {
        const r = await fetch(`${API_URL}/users`);
        const data = await r.json();
        if (!data.users || !data.users.length) {
          wrap.innerHTML = '<p class="muted small">Nu există utilizatori înregistrați.</p>';
          return;
        }
        let html =
          '<table class="admin-users-table"><thead><tr><th>Utilizator</th><th>Stare</th><th>Acțiuni</th></tr></thead><tbody>';
        data.users.forEach((u) => {
          const name = escapeHtml(u.username);
          const enc = encodeURIComponent(u.username);
          const banned = !!u.banned;
          const isSelf = u.username === ADMIN_USER;
          html += `<tr>
            <td>${name}</td>
            <td>${banned ? '<span style="color:#fca5a5">Suspendat</span>' : 'Activ'}</td>
            <td><div class="admin-actions">`;
          if (!isSelf) {
            if (banned) {
              html += `<button type="button" class="btn-admin" data-unban="${enc}">Ridică ban</button>`;
            } else {
              html += `<button type="button" class="btn-admin btn-admin-warn" data-ban="${enc}">Ban</button>`;
            }
            html += `<button type="button" class="btn-admin btn-admin-danger" data-del-user="${enc}">Șterge cont</button>`;
          } else {
            html += '<span class="muted small">—</span>';
          }
          html += '</div></td></tr>';
        });
        html += '</tbody></table>';
        wrap.innerHTML = html;
        wrap.querySelectorAll('[data-ban]').forEach((btn) => {
          btn.addEventListener('click', () => {
            window.setUserBanned(decodeURIComponent(btn.getAttribute('data-ban')), true);
          });
        });
        wrap.querySelectorAll('[data-unban]').forEach((btn) => {
          btn.addEventListener('click', () => {
            window.setUserBanned(decodeURIComponent(btn.getAttribute('data-unban')), false);
          });
        });
        wrap.querySelectorAll('[data-del-user]').forEach((btn) => {
          btn.addEventListener('click', () => {
            window.adminDeleteUser(decodeURIComponent(btn.getAttribute('data-del-user')));
          });
        });
      } catch (e) {
        wrap.innerHTML = '<p class="error">Nu s-au putut încărca utilizatorii.</p>';
      }
    };

    function setAdminStatus(message, kind) {
      const el = document.getElementById('admin-status');
      if (!el) return;
      if (!message) {
        el.style.display = 'none';
        el.textContent = '';
        return;
      }
      el.style.display = 'block';
      const cls = kind === 'error' ? 'error' : 'success';
      el.className = 'status-message ' + cls;
      el.textContent = message;
    }

    let __adminAuthResolve = null;
    window.requestAdminAuth = function (title, message) {
      const modal = document.getElementById('admin-auth-modal');
      const modalTitle = document.getElementById('admin-auth-title');
      const modalMessage = document.getElementById('admin-auth-message');
      const input = document.getElementById('admin-auth-input');

      if (!modal || !modalTitle || !modalMessage || !input) {
        const fallback = prompt('Parola administrator sau cheia ADMIN_SECRET:');
        return Promise.resolve(fallback || null);
      }

      modalTitle.textContent = title || 'Administrare';
      modalMessage.textContent =
        message || 'Introdu parola admin sau ADMIN_SECRET.';
      input.value = '';

      const err = document.getElementById('admin-auth-error');
      if (err) err.style.display = 'none';

      modal.classList.remove('hidden');
      setAdminStatus('', null);
      setTimeout(() => input.focus(), 50);

      return new Promise((resolve) => {
        __adminAuthResolve = resolve;
      });
    };

    window.closeAdminAuthModal = function () {
      const modal = document.getElementById('admin-auth-modal');
      if (modal) modal.classList.add('hidden');
      if (typeof __adminAuthResolve === 'function') {
        __adminAuthResolve(null);
      }
      __adminAuthResolve = null;
    };

    window.submitAdminAuth = function (event) {
      event.preventDefault();
      const input = document.getElementById('admin-auth-input');
      const modal = document.getElementById('admin-auth-modal');
      const value = input ? input.value.trim() : '';

      if (!value) {
        const err = document.getElementById('admin-auth-error');
        if (err) {
          err.textContent = 'Trebuie să introduci o valoare.';
          err.style.display = 'block';
        }
        return;
      }

      if (modal) modal.classList.add('hidden');
      if (typeof __adminAuthResolve === 'function') {
        __adminAuthResolve(value);
      }
      __adminAuthResolve = null;
    };

    window.setUserBanned = async function (username, banned) {
      if (!ADMIN_USER) return;
      const adminPassword = await window.requestAdminAuth(
        'Ban utilizator',
        `Pentru a modifica statusul contului «${username}», introdu parola admin sau ADMIN_SECRET.`
      );
      if (!adminPassword) return;
      try {
        setAdminStatus('Se procesează…', null);
        const r = await fetch(`${API_URL}/users/${encodeURIComponent(username)}/banned`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            adminUsername: ADMIN_USER,
            adminPassword,
            banned: !!banned
          })
        });
        const j = await r.json();
        if (j.success) {
          setAdminStatus(j.message || 'Actualizat.', 'success');
          window.loadAdminUsersPanel();
        } else {
          setAdminStatus(j.message || 'Eroare.', 'error');
        }
      } catch (e) {
        setAdminStatus('Eroare de rețea.', 'error');
      }
    };

    window.adminDeleteUser = async function (username) {
      if (!ADMIN_USER) return;
      const adminPassword = await window.requestAdminAuth(
        'Ștergere cont',
        `Pentru a șterge contul «${username}» (ireversibil), introdu parola admin sau ADMIN_SECRET.`
      );
      if (!adminPassword) return;
      try {
        setAdminStatus('Se șterge contul…', null);
        const r = await fetch(`${API_URL}/users/${encodeURIComponent(username)}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            adminUsername: ADMIN_USER,
            adminPassword
          })
        });
        const j = await r.json();
        if (j.success) {
          setAdminStatus(j.message || 'Cont șters.', 'success');
          window.loadAdminUsersPanel();
          window.loadLeaderboard();
        } else {
          setAdminStatus(j.message || 'Eroare la ștergere.', 'error');
        }
      } catch (e) {
        setAdminStatus('Eroare de rețea.', 'error');
      }
    };

    /** Dacă vechea versiune a pus în localStorage displayName în loc de username, îl corectăm după lista de pe server. */
    function syncSessionUsernameFromServer() {
      const cu = localStorage.getItem('currentUser');
      if (!cu) return Promise.resolve();
      return fetch(`${API_URL}/users`)
        .then((r) => r.json())
        .then((data) => {
          if (!data.users || !data.users.length) return;
          const known = new Set(data.users.map((u) => u.username));
          if (known.has(cu)) return;
          const byLabel = data.users.find(
            (u) => (u.displayName || u.username) === cu
          );
          if (byLabel) {
            localStorage.setItem('currentUser', byLabel.username);
          }
        })
        .catch(() => {});
    }

    // Check login status on load
    document.addEventListener('DOMContentLoaded', () => {
      // Register Google Sign-In callback
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: '681313505171-djpc5421rlcomedfqujbsu6s3lq3l66e.apps.googleusercontent.com', // Replace with actual client ID
          callback: handleCredentialResponse
        });
      }

      syncSessionUsernameFromServer().then(() => {
        const whereHint = document.getElementById('admin-where-hint');
        if (whereHint && ADMIN_USER) whereHint.style.display = 'block';

        const user = localStorage.getItem('currentUser');
        const displayName = localStorage.getItem('displayName') || user;

        if (user) {
          document.getElementById('logged-in-user').classList.remove('hidden-form');
          document.getElementById('logged-out-user').classList.add('hidden-form');
          document.getElementById('welcome-message').textContent = `Salut, ${displayName}!`;
        }

        if (ADMIN_USER && user === ADMIN_USER) {
          const panel = document.getElementById('admin-panel');
          if (panel) {
            panel.classList.remove('hidden-form');
            window.loadAdminUsersPanel();
          }
        }

        window.loadLeaderboard();
      });
    });
  </script>
</head>
<body>
  <!-- Animated background orbs -->
  <div class="floating-orb orb-1"></div>
  <div class="floating-orb orb-2"></div>
  <div class="floating-orb orb-3"></div>
  
  <!-- Modal Auth -->
  <div id="auth-modal" class="modal hidden" style="z-index: 99999;">
    <div class="modal-backdrop" onclick="closeAuthModal()"></div>
    <div class="modal-content">
      <div class="auth-tabs">
        <div id="tab-login" class="auth-tab active" onclick="openAuthModal('login')">Autentificare</div>
        <div id="tab-register" class="auth-tab" onclick="openAuthModal('register')">Înregistrare</div>
      </div>
      
      <!-- Login Form -->
      <form id="login-form" class="auth-form" onsubmit="handleAuth(event, 'login')">
        <input type="text" name="username" placeholder="Nume de utilizator" required>
        <input type="password" name="password" placeholder="Parolă" required>
        <button type="submit" class="btn-primary">Intră în cont</button>
      </form>
      
      <div id="login-google-divider" class="google-divider" style="display: none;">SAU cu Google</div>
      <div id="login-google-btn" class="google-btn-container" style="display: none;">
        <button type="button" class="custom-google-btn" onclick="handleGoogleLogin()">
          <span class="google-icon"><img src="icon-google.png" alt="Google Logo"></span>
          Intră cu Google
        </button>
      </div>
      
      <!-- Register Form -->
      <form id="register-form" class="auth-form hidden-form" onsubmit="handleAuth(event, 'register')">
        <input type="text" name="username" placeholder="Alege un nume de utilizator" required>
        <input type="password" name="password" placeholder="Alege o parolă" required>
        <button type="submit" class="btn-primary">Creează cont</button>
      </form>
      
      <div id="register-google-divider" class="google-divider" style="display: none;">SAU cu Google</div>
      <div id="register-google-btn" class="google-btn-container" style="display: none;">
        <button type="button" class="custom-google-btn" onclick="handleGoogleRegister()">
          <span class="google-icon"><img src="icon-google.png" alt="Google Logo"></span>
          Înregistrare cu Google
        </button>
      </div>
      
      <div id="auth-message" class="auth-message"></div>
      
      <div class="modal-actions">
        <button onclick="closeAuthModal()" class="btn-secondary">Închide</button>
      </div>
    </div>
  </div>

  <!-- Modal Google Name Selection -->
  <div id="google-name-modal" class="modal hidden" style="z-index: 99999;">
    <div class="modal-backdrop" onclick="closeGoogleNameModal()"></div>
    <div class="modal-content">
      <h2>Completează înregistrarea</h2>
      <p>Alege un nume de utilizator pentru contul tău:</p>
      <form id="google-name-form" class="auth-form" onsubmit="submitGoogleRegistration(event)">
        <input type="text" id="google-custom-username" placeholder="Alege un nume de utilizator" required>
        <input type="hidden" id="google-id-hidden">
        <input type="hidden" id="google-email-hidden">
        <input type="hidden" id="google-displayname-hidden">
        <div id="google-name-message" class="auth-message"></div>
        <button type="submit" class="btn-primary">Creează cont</button>
      </form>
      <div class="modal-actions">
        <button onclick="closeGoogleNameModal()" class="btn-secondary">Anulează</button>
      </div>
    </div>
  </div>

  <!-- Modal Dificultate -->
  <div id="difficulty-modal" class="modal hidden">
    <div class="modal-backdrop" onclick="closeDifficultyModal()"></div>
    <div class="modal-content">
      <h2>Alege dificultatea</h2>
      <p>Selectează nivelul de dificultate pentru a vedea impactul asupra banilor și fericirii tale.</p>
      
      <div class="difficulty-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
        <div class="difficulty-card selectable" onclick="selectDifficulty('usor')" style="cursor: pointer; background: rgba(30, 58, 138, 0.4); padding: 1rem; border-radius: 0.75rem; border: 1px solid rgba(148, 163, 184, 0.3); transition: transform 0.2s ease; position: relative;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <h3 style="color: #93c5fd; margin: 0;">Ușor</h3>
            <button onclick="event.stopPropagation(); showDifficultyInfo('usor')" style="background: #3b82f6; color: white; border: none; border-radius: 50%; width: 24px; height: 24px; cursor: pointer; font-weight: bold; padding: 0; display: flex; align-items: center; justify-content: center;">?</button>
          </div>
          <ul style="list-style: none; font-size: 0.85rem; color: #cbd5f5;">
            <li id="diff-usor-bani">💰 Venituri +30%</li>
            <li id="diff-usor-fericire">😊 Fericire +30%</li>
          </ul>
        </div>
        
        <div class="difficulty-card selectable" onclick="selectDifficulty('mediu')" style="cursor: pointer; background: rgba(30, 58, 138, 0.4); padding: 1rem; border-radius: 0.75rem; border: 1px solid rgba(148, 163, 184, 0.3); transition: transform 0.2s ease; position: relative;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <h3 style="color: #93c5fd; margin: 0;">Mediu</h3>
            <button onclick="event.stopPropagation(); showDifficultyInfo('mediu')" style="background: #3b82f6; color: white; border: none; border-radius: 50%; width: 24px; height: 24px; cursor: pointer; font-weight: bold; padding: 0; display: flex; align-items: center; justify-content: center;">?</button>
          </div>
          <ul style="list-style: none; font-size: 0.85rem; color: #cbd5f5;">
            <li id="diff-mediu-bani">⚖️ Venituri normale</li>
            <li id="diff-mediu-fericire">😊 Fericire normală</li>
          </ul>
        </div>
        
        <div class="difficulty-card selectable" onclick="selectDifficulty('greu')" style="cursor: pointer; background: rgba(30, 58, 138, 0.4); padding: 1rem; border-radius: 0.75rem; border: 1px solid rgba(148, 163, 184, 0.3); transition: transform 0.2s ease; position: relative;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <h3 style="color: #93c5fd; margin: 0;">Greu</h3>
            <button onclick="event.stopPropagation(); showDifficultyInfo('greu')" style="background: #3b82f6; color: white; border: none; border-radius: 50%; width: 24px; height: 24px; cursor: pointer; font-weight: bold; padding: 0; display: flex; align-items: center; justify-content: center;">?</button>
          </div>
          <ul style="list-style: none; font-size: 0.85rem; color: #cbd5f5;">
            <li id="diff-greu-bani">📉 Venituri -30%</li>
            <li id="diff-greu-fericire">😊 Fericire -30%</li>
          </ul>
        </div>
      </div>
      
      <div class="modal-actions">
        <button onclick="closeDifficultyModal()" class="btn-secondary">Anulează</button>
      </div>
    </div>
  </div>

  <!-- Modal Informații Dificultate -->
  <div id="difficulty-info-modal" class="modal hidden">
    <div class="modal-backdrop" onclick="closeDifficultyInfo()"></div>
    <div class="modal-content" style="max-width: 500px;">
      <h2 id="info-title"></h2>
      <div id="info-content" style="color: #cbd5f5; line-height: 1.6; font-size: 0.95rem;">
        <!-- Conținut dinamic -->
      </div>
      <div class="modal-actions">
        <button onclick="closeDifficultyInfo()" class="btn-primary">Înapoi</button>
      </div>
    </div>
  </div>

  <!-- Modal Admin Auth -->
  <div id="admin-auth-modal" class="modal hidden" style="z-index: 100000;">
    <div class="modal-backdrop" onclick="closeAdminAuthModal()"></div>
    <div class="modal-content" style="max-width: 420px;">
      <h2 id="admin-auth-title" style="margin-top:0;">Administrare</h2>
      <p id="admin-auth-message" style="color:#cbd5f5; line-height:1.6; margin-top:0; font-size:0.95rem;">
        Introdu parola admin sau ADMIN_SECRET.
      </p>
      <form id="admin-auth-form" onsubmit="submitAdminAuth(event)">
        <input
          type="password"
          id="admin-auth-input"
          placeholder="Parola admin sau cheia ADMIN_SECRET"
          required
          style="width:100%; padding: 0.8rem; border-radius: 0.5rem; border: 1px solid #475569; background: #1e293b; color: white;"
        />
        <div id="admin-auth-error" class="auth-message" style="display:none;"></div>
        <div class="modal-actions" style="margin-top: 0.75rem;">
          <button type="button" onclick="closeAdminAuthModal()" class="btn-secondary">Anulează</button>
          <button type="submit" class="btn-primary">Continuă</button>
        </div>
      </form>
    </div>
  </div>

  <!-- Auth Container -->
  <div class="auth-container">
    <div id="logged-in-user" class="user-welcome hidden-form">
      <span id="welcome-message"></span>
      <button onclick="logout()" class="auth-btn">Deconectare</button>
    </div>
    <div id="logged-out-user">
      <button onclick="openAuthModal('login')" class="auth-btn">Autentificare</button>
      <button onclick="openAuthModal('register')" class="auth-btn">Înregistrare</button>
    </div>
  </div>

  <header class="site-header">
    <div class="container header-content">
      <h1>Joc Financiar pentru Studenți</h1>
    </div>
  </header>

  <main class="container main-layout">
    <section class="intro-card">
      <div class="welcome-section" style="background: rgba(59, 130, 246, 0.1); padding: 1.5rem; border-radius: 0.75rem; border-left: 4px solid #3b82f6; margin-bottom: 2rem;">
        <h2 style="margin-top: 0; color: #60a5fa;">🎓 Bun venit!</h2>
        <p style="font-size: 1.05rem; color: #cbd5f5; margin: 0;">Învață să îți gestionezi banii și energia pe parcursul a 12 luni.</p>
      </div>
      
      <div class="how-to-play">
        <h2>📖 Cum se joacă?</h2>
        <p>Acesta este un simulator de educație financiară conceput să te învețe cum să gestionezi resursele limitate pe parcursul a <strong>12 luni</strong> de studenție.</p>
        
        <div class="rules-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin: 1.5rem 0; text-align: left;">
          <div class="rule-item">
            <span style="font-size: 1.5rem;">🎯</span>
            <h4 style="color: #93c5fd; margin: 0.5rem 0;">Obiectivul</h4>
            <p style="font-size: 0.9rem; color: #cbd5f5;">Trebuie să ajungi la finalul celor 12 luni fără ca soldul tău bancar să scadă sub 0 și fără să îți epuizezi fericirea.</p>
          </div>
          <div class="rule-item">
            <span style="font-size: 1.5rem;">⚖️</span>
            <h4 style="color: #93c5fd; margin: 0.5rem 0;">Echilibrul</h4>
            <p style="font-size: 0.9rem; color: #cbd5f5;">Fiecare alegere are consecințe. Poți câștiga bani sacrificând fericirea sau poți investi în starea ta de bine, dar cu un cost financiar.</p>
          </div>
          <div class="rule-item">
            <span style="font-size: 1.5rem;">📅</span>
            <h4 style="color: #93c5fd; margin: 0.5rem 0;">Fluxul Lunii</h4>
            <p style="font-size: 0.9rem; color: #cbd5f5;">La începutul fiecărei luni se aplică automat venitul și cheltuielile fixe (chirie, utilități), urmate de un eveniment surpriză.</p>
          </div>
        </div>

        <div class="steps-box" style="background: rgba(30, 58, 138, 0.3); padding: 1rem; border-radius: 0.75rem; border-left: 4px solid #3b82f6; margin-bottom: 2rem; text-align: left;">
          <h4 style="margin-bottom: 0.5rem;">🚀 Pașii tăi:</h4>
          <ol style="font-size: 0.9rem; color: #cbd5f5; padding-left: 1.2rem;">
            <li><strong>Alege un scenariu</strong> de viață care ți se potrivește (Cămin, Chirie sau Garsonieră).</li>
            <li><strong>Selectează dificultatea</strong> pentru a ajusta provocarea financiară.</li>
            <li><strong>Ia decizii înțelepte</strong> în fiecare lună pentru a-ți păstra resursele la un nivel optim.</li>
          </ol>
        </div>
      </div>

      <h2>Alege scenariul</h2>
      <p>Selectează un profil și începe simularea. Obiectivul tău este să supraviețuiești 12 luni fără să intri pe minus și fără să îți epuizezi fericirea.</p>

      <form id="scenario-form" action="game.html" method="GET" class="scenario-grid">
        <input type="hidden" name="difficulty" id="hidden-difficulty" value="mediu" />
        <label class="scenario-card">
          <input type="radio" name="scenario" value="camin" checked />
          <div class="scenario-content">
            <h3>Student la cămin</h3>
          </div>
        </label>

        <label class="scenario-card">
          <input type="radio" name="scenario" value="chirie" />
          <div class="scenario-content">
            <h3>Student în chirie</h3>
          </div>
        </label>
        <span id="scenario-garsoniera">
          <label class="scenario-card">
            <input type="radio" name="scenario" value="garsoniera" />
            <div class="scenario-content">
              <h3>Student într-o garsonieră</h3>
            </div>
          </label>
        </span>
        
        <span id="scenario-navetist">
          <label class="scenario-card">
            <input type="radio" name="scenario" value="navetist" />
            <div class="scenario-content">
              <h3>Student Navetist</h3>
            </div>
          </label>
        </span>
      </form>

      <div class="actions" style="position: relative; z-index: 10;">
        <button type="button" id="btn-open-difficulty" class="btn-primary" onclick="openDifficultyModal()">
          Începe jocul
        </button>
      </div>
    </section>

    <aside class="leaderboard-card">
      <h2>🏆 Clasament Jucători</h2>
      <p>Clasament global bazat pe scorul final (bani rămași după 12 luni).</p>
      <div id="leaderboard">
        <p>Se încarcă clasamentul...</p>
      </div>

      <div id="admin-panel" class="admin-panel hidden-form" style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid rgba(55, 65, 81, 0.8);">
        <h3 style="margin: 0 0 0.5rem; font-size: 1.1rem; color: #93c5fd;">Administrare</h3>
        <p class="muted small" style="margin: 0 0 0.75rem;">Ban / ștergere utilizatori și ștergere scoruri. La fiecare acțiune introduci parola contului admin sau cheia <code style="font-size:0.8em">ADMIN_SECRET</code> din <code style="font-size:0.8em">.env</code> (util pentru cont doar Google).</p>
        <p id="admin-status" class="status-message" style="display:none;"></p>
        <div id="admin-users-wrap"></div>
      </div>
    </aside>
  </main>

  <footer class="site-footer">
    <div class="container">
      <small>&copy; <?php echo date('Y'); ?> Joc Financiar Educațional | <a href="contact.html" class="link-secondary">Contactează-ne</a></small>
    </div>
  </footer>

  <script>
    (function () {
      const startConfig = (window.gameConfig && window.gameConfig.startConfig) || {};

      function actualizeazaStarturi(diffKey = "mediu") {
        try {
          Object.keys(startConfig).forEach((key) => {
            const startSpan = document.querySelector(`[data-start-scenario="${key}"]`);
            const incomeSpan = document.querySelector(`[data-income-scenario="${key}"]`);
            if (!startSpan && !incomeSpan) return;
            const cfgScen = startConfig[key];
            const start = cfgScen[diffKey] || cfgScen.mediu;
            if (start) {
              const text = `${start.bani} RON, Fericire: ${start.fericire}`;
              if (startSpan) startSpan.textContent = text;
              if (incomeSpan) incomeSpan.textContent = text;
            }
          });
        } catch (e) {
          console.error("Eroare la actualizarea valorilor:", e);
        }
      }

      actualizeazaStarturi();
    })();
  </script>
</body>
</html>

