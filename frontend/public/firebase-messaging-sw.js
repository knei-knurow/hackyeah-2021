// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyA7dfh7bUrK5BWKbTSfQpuOyHF62nW62JI",
  authDomain: "hackyeah-2021.firebaseapp.com",
  projectId: "hackyeah-2021",
  storageBucket: "hackyeah-2021.appspot.com",
  messagingSenderId: "1082992813378",
  appId: "1:1082992813378:web:527cd7986a3212f4c394db",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();