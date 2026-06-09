# Firebase Setup

This project is prepared to use Firebase Authentication and Cloud Firestore.

## Project

Existing Firebase project number:

```text
751406321487
```

After Firebase CLI login is refreshed, resolve the project ID:

```powershell
npx -y firebase-tools@latest projects:list
```

Then set the active project:

```powershell
npx -y firebase-tools@latest use <project-id>
```

## Register Web App

Create or reuse a Firebase Web App:

```powershell
npx -y firebase-tools@latest apps:list WEB --project <project-id>
npx -y firebase-tools@latest apps:create WEB "Free Sewaa Web" --project <project-id>
```

Fetch the Web SDK config:

```powershell
npx -y firebase-tools@latest apps:sdkconfig WEB <app-id> --project <project-id>
```

Copy the returned values into `.env`:

```env
FIREBASE_PROJECT_ID=<project-id>
FIREBASE_API_KEY=<api-key>
FIREBASE_AUTH_DOMAIN=<project-id>.firebaseapp.com
FIREBASE_STORAGE_BUCKET=<storage-bucket>
FIREBASE_MESSAGING_SENDER_ID=<sender-id>
FIREBASE_APP_ID=<web-app-id>
```

## Enable Providers

Deploy the Auth provider config:

```powershell
npx -y firebase-tools@latest deploy --only auth --project <project-id>
```

Phone Authentication may still need to be enabled in Firebase Console:

```text
Firebase Console > Authentication > Sign-in method > Phone
```

## Firestore

Check or create the Firestore database:

```powershell
npx -y firebase-tools@latest firestore:databases:list --project <project-id>
```

Deploy Firestore rules and indexes:

```powershell
npx -y firebase-tools@latest deploy --only firestore --project <project-id>
```
