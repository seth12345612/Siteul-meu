# Google Sign-In Setup Guide

This guide explains how to set up Google Authentication for your application.

## Prerequisites

- A Google Cloud account (https://console.cloud.google.com)
- Access to your application (localhost or deployed URL)

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (click the project selector and click "New Project")
3. Name your project (e.g., "Joc Financiar")
4. Wait for the project to be created

## Step 2: Enable Google+ API

1. In the Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google+ API"
3. Click on it and press "Enable"

## Step 3: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client ID"
3. If prompted, configure the OAuth consent screen first:
   - Choose "External" user type
   - Fill in the required fields:
     - App name: "Joc Financiar"
     - Your email: Your email
     - Support email: Your email
   - Add scopes: `email`, `profile`, `openid`
   - Add test users if needed
4. Return to creating credentials
5. Select "Web application" as the application type
6. Under "Authorized JavaScript origins", add:
   - `http://localhost:3000`
   - `http://localhost` (or your XAMPP port if different)
   - `http://127.0.0.1`
7. Under "Authorized redirect URIs", add:
   - `http://localhost:3000/` (with trailing slash)
   - `http://localhost/` (or your XAMPP URL)
8. Click "Create"
9. Copy your **Client ID** (you'll need this)

## Step 4: Add Client ID to Your Application

### Backend (.env file):

Create or edit the `.env` file in the `backend/` directory:

```
GOOGLE_CLIENT_ID=YOUR_CLIENT_ID_HERE
```

Replace `YOUR_CLIENT_ID_HERE` with the actual Client ID from Step 3.

### Frontend (index.php):

1. Open `index.php`
2. Find two occurrences of `'YOUR_GOOGLE_CLIENT_ID'` (use Ctrl+F to find them)
3. Replace both with your actual Client ID from Step 3

Locations to replace:
- Line ~475: In the `DOMContentLoaded` event listener
- Line ~305: In the `handleGoogleLogin` function
- Line ~381: In the `handleGoogleRegister` function

## Step 5: Test the Setup

1. Start your Node.js backend:
   ```bash
   cd backend
   npm start
   ```

2. Open your application in a browser:
   - `http://localhost` (if using XAMPP default)
   - Or your custom URL

3. Click on "Autentificare" or "Înregistrare"
4. Click the "Intră cu Google" or "Înregistrare cu Google" button
5. You should see the Google Sign-In dialog

## Troubleshooting

### "Missing Client ID" Error
- Ensure you've added the Client ID to both `.env` and `index.php`
- Restart your backend server after adding the `.env` file

### "Invalid Client ID" Error
- Double-check that you copied the Client ID correctly
- Ensure the Client ID matches in both frontend and backend

### CORS Errors
- The backend is configured to allow CORS
- If issues persist, check that `http://localhost:3000` is in your authorized origins

### "Redirect URI mismatch"
- This shouldn't happen with the setup above, but if it does:
- Go back to Google Cloud Console > Credentials
- Edit your OAuth 2.0 client
- Ensure your localhost URLs are in "Authorized redirect URIs"

## How It Works

1. **Login with Google:**
   - User clicks "Intră cu Google"
   - Google returns an ID token
   - Backend verifies the token with Google's servers
   - If user exists (has a Google ID linked), they're logged in
   - If user is new, they're prompted to choose a username

2. **Register with Google:**
   - User clicks "Înregistrare cu Google"
   - Google returns an ID token
   - Backend verifies the token
   - If new user, a modal appears asking them to choose a username
   - The account is created with their Google profile info and chosen username

## User Account Structure

Google-authenticated users have these fields:
- `username`: The custom username they chose
- `google_id`: Their unique Google ID
- `email`: Their Google account email
- `displayName`: Their Google profile name
- `password`: `null` (Google OAuth doesn't use passwords)
- `avatar`: Optional custom avatar
- `created_at`: Account creation timestamp

## Security Notes

- Never share your Client Secret (only Client ID is needed for frontend)
- The Client Secret stays only in your backend's `.env` file
- Users created via Google login cannot be accessed with a password
- All Google tokens are verified server-side before creating accounts
