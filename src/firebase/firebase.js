import * as firebase from 'firebase';

export const config = {
	apiKey: "AIzaSyCgfmhf_qE_VRlbqF-NyKjUI8tL9DporF0",
	authDomain: "https://pwa-app-asia.firebaseapp.com",
	databaseURL: "https://pwa-app-asia.firebaseio.com/",
	messagingSenderId: "394438070185",
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
