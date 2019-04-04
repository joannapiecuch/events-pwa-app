importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
var firebase;

firebase.initializeApp({
	messagingSenderId: '394438070185'
});

firebase.messaging();
