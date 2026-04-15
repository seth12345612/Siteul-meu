# Setup Pagina de Contact

## Instrucțiuni de Configurare

### 1. Instalare Dependențe

Accesează folderul `backend` și instalează pachetele necesare:

```bash
cd backend
npm install
```

Aceasta va instala `nodemailer` și alte dependențe din `package.json`.

### 2. Configurare Email (Gmail)

Pentru a functiona corect, trebuie să configurezi email-ul și parola de aplicație.

#### Pas 1: Activează Gmail App Passwords
1. Accesează [Google Account Security Settings](https://myaccount.google.com/security)
2. Activează **2-Step Verification** dacă nu este deja activat
3. Du-te la **App passwords** (va apărea după ce activezi 2FA)
4. Selectează:
   - **App:** Mail
   - **Device:** Windows Computer (sau ce dispozitiv folosești)
5. Google îți va genera o parolă de 16 caractere

#### Pas 2: Creează Fișierul `.env`

În folderul `backend`, creează un fișier `.env` cu următoarele date:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password-16-chars
```

**IMPORTANT:** 
- Înlocuiește `your-email@gmail.com` cu adresa ta de Gmail
- Înlocuiește `your-app-password-16-chars` cu parola de 16 caractere generată de Google
- NU folosi parola ta normală de Gmail

### 3. Pornirea Serverului

Din folderul `backend`, rulează:

```bash
npm start
```

Sau:

```bash
node server.js
```

Serverul va rula pe `http://localhost:3000`

### 4. Accesarea Paginii de Contact

1. Asigură-te că Apache/PHP server-ul este pornit
2. Accesează pagina de contact la: `http://localhost/joc%20financiar/contact.html`
3. Completează formularul și trimite mesajul

## Fișierele Adăugate/Modificate

### Fișiere Noi:
- **contact.html** - Pagina de contact cu formular
- **CONTACT_SETUP.md** - Acest fișier de instrucțiuni

### Fișiere Modificate:
- **backend/server.js** - Adaugă endpoint `/trimite-email`
- **backend/package.json** - Adaugă dependența `nodemailer`
- **assets/config.js** - Adaugă configurația `API_URL`
- **assets/styles.css** - Adaugă stiluri pentru pagina de contact

## Funcționare

### Frontend (contact.html)
- Utilizatorul completează formularul cu: Nume, Email, Mesaj
- La apăsarea butonului "Trimite mesajul", datele sunt trimise la server
- Un mesaj de succes sau eroare este afișat

### Backend (server.js)
- Primește datele prin endpoint POST `/trimite-email`
- Validează datele
- Trimite email prin Gmail folosind nodemailer
- Salvează mesajul și în fișierul `data/messages.json` pentru referință

## Troubleshooting

### "Cannot find module 'nodemailer'"
- Asigură-te că ai rulat `npm install` în folderul `backend`

### "Serviciul de email nu este configurat"
- Verifică dacă fișierul `.env` există și are valorile corecte
- Asigură-te că `EMAIL_USER` și `EMAIL_PASSWORD` sunt setate

### "Invalid login" sau "Invalid credentials"
- Verifică că parola este o **App Password** de la Google, nu parola normală
- Asigură-te că 2-Step Verification este activat
- Încearcă să regenerezi parola de aplicație

### Email-ul nu se primește
- Verifică folderul "Spam" în Gmail
- Asigură-te că serverul Node.js este pornit
- Verifică în browser console pentru erori (F12 > Console)

## Securitate

⚠️ **IMPORTANT:**
- NU posta niciodată fișierul `.env` pe git/GitHub
- NU partaja adresa de email sau parola de aplicație
- Adaugă `.env` în `.gitignore` dacă folosești git

```gitignore
.env
node_modules/
```

## Testare

Pentru a testa local, poți folosi servicii precum:
- **Mailhog** - Captează emails local
- **MailCatcher** - Alternativă la Mailhog
- **Gmail Sample** - Folosind contul tău personal

## Support

Dacă ai probleme, verifică:
1. Serverul Node.js este pornit pe port 3000
2. Fișierul `.env` este configurat corect
3. Google 2-Step Verification și App Password sunt setate
4. Conexiunea la internet este activă
