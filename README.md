# PocketBudget

PocketBudget is a single-file vanilla HTML/CSS/JavaScript budget tracker packaged for Android with Capacitor. The existing interface and visual styling are preserved.

## What was fixed

- Bound dynamically-created sheet forms directly to their submit handler, with a document-level fallback for forms outside sheets.
- Added guarded form/action dispatch so a runtime error is reported to the user instead of silently killing the interaction.
- Removed the delayed submit lock that could leave mobile forms temporarily unresponsive after validation.
- Kept the existing data model and browser-local storage behavior.

## Run locally

Open `index.html` in a modern browser. Data is stored in that browser's local storage on that device. Use Settings → Backup regularly; the app does not sync data to the cloud.

## Build APK with GitHub Actions

1. Create a GitHub repository and upload the contents of this folder.
2. Push to `main` (or `master`), or open **Actions → Build PocketBudget APK → Run workflow**.
3. Open the completed workflow run and download the `Personal-Budget-Tracker-APK` artifact.

The workflow installs Capacitor, creates the Android platform when it is not already committed, syncs the web app, and builds `app-debug.apk` using Java 21 and Node 22.

## Notes

- The GitHub Actions artifact is a debug APK, suitable for testing/sideloading. A Play Store release needs a separately configured signing key and release build.
- The PIN is an access screen, not device-grade encryption. App data remains local to the browser/WebView storage.
