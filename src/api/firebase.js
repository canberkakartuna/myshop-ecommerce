import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAA9-TZZZ6GGJJhPhFCG51dyjUyvypocBU",
	authDomain: "myshop-c5a6f.firebaseapp.com",
	projectId: "myshop-c5a6f",
	storageBucket: "myshop-c5a6f.appspot.com",
	messagingSenderId: "111744886248",
	appId: "1:111744886248:web:3d629d47d581c2a8a0305d",
};

const app = firebase.initializeApp(firebaseConfig);

const api = app.firestore();

export default api;
