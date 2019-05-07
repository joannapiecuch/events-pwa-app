import { firebase } from './firebase/firebase';

export const initializeFirebase = () => {
	navigator.serviceWorker
		.register('/service-worker.js')
		.then((registration) => {
			firebase.messaging().useServiceWorker(registration);
		});
};

//
// export const askForPermissionToReceiveNotifications = async () => {
// 	try {
// 		const messaging = firebase.messaging();
// 		await messaging.requestPermission();
// 		const token = await messaging.getToken();
//
// 		try {
// 			await firebase.database().ref('accessTokens').child(token).set({token});
// 		} catch (e) {
// 			if (e.code !== 'PERMISSION_DENIED') {
// 				throw e;
// 			}
// 		}
//
// 		return token;
// 	} catch ( error ) {
// 		console.error(error);
// 	}
// };
//
// const sendNotifications = (token: any) => {
// 	fetch('https://fcm.googleapis.com/fcm/send', {
// 		method: 'POST',
// 		headers: {
// 			'Authorization': 'key=AAAAW9ZXT6k:APA91bE2b70BhB__h-WLFJDde63_P6pAp4ZMuk8McNxUM3_nLzPeSHqERcfmkYnM87ZqOIGfo2On5YADVQU5MaehtesY7FDikR233V0XKFgOm2oDGCh0Kci2f8bWPz2Vyy7qp1P29ECz',
// 			'Accept': 'application/json',
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify({
// 			notification: {
// 				title: 'Hello!',
// 				body: 'Firebase is awesome',
// 				click_action: 'https://pwa-app-asia.firebaseapp.com',
// 				icon: 'http://url-to-an-icon/icon.png'
// 			},
// 			to: token
// 		})
// 	})
// };
//
// export const getTokens = () => {
// 	firebase.database().ref('accessTokens').on('value', (snapshot: any) => {
// 		for (let val of Object.values(snapshot.val())) {
// 			console.log(val);
// 			// sendNotifications(val.token);
// 		}
// 	});
// };
