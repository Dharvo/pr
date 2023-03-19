// import { getAnalytics } from 'firebase/analytics'
// import {}

// import { initializeApp } from 'firebase/app'
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, getDownloadURL } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";
// import * as firebase from 'firebase/app'
// import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/storage";

const FirebaseCreditials = {
  apiKey: "AIzaSyDW9VrvXJa_aZP-At-WXA9B4r4uL0C2kwI",
  authDomain: "ponle-richard.firebaseapp.com",
  projectId: "ponle-richard",
  storageBucket: "ponle-richard.appspot.com",
  messagingSenderId: "564286363450",
  appId: "1:564286363450:web:7c81e841b7f7cf17842203",
  measurementId: "G-0RPW488810",
};

// console.log(FirebaseCreditials.apiKey)
// let app
// function initFirebase() {
// console.log(firebase.apps.length, !firebase.apps.length)
// 	if (!firebase.apps.length) {
// 		if (typeof window !== undefined) {
// 			app = initializeApp(FirebaseCreditials, 'Ponle Richard')
// 			console.log('firebase is initialized !')
// 			return true
// 		}
// 	}
// 	console.log('firebase is not initialized !')
// 	return
// }

// function createOrCheckApp() {}
const app = !firebase.apps.length
  ? firebase.initializeApp(FirebaseCreditials, "Ponle Richard")
  : firebase.app("Ponle Richard");
// const app = initializeApp(FirebaseCreditials)

// console.log(app)
console.log("App Name:", app.name);
const auth = getAuth(app);

const firestore = getFirestore(app);
// const firestore = getFirestore(app)
const storage = getStorage(app);
//create collection ref
const slidesCollection = collection(firestore, "Slides");
// const slidesCollection = collection(firestore, 'Slides')
// const slides =
// getDocs(slidesCollection).then((snapshot) => {
// 	const result = []x
// 	snapshot.docs.forEach((snapshot) => {
// 		result.push({ ...snapshot.data(), id: snapshot.id })
// const realDB= getDatabase(app)
// 	})
// 	console.log('result', result)
// 	return result
// })
// console.log('ref', storage)

// const getImageUrl = (fileName) => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           setImgUrl(downloadURL)
//         });
// 	return storage.ref()
// }
// console.log('storage', storage)

export { firebase, app, firestore, auth, storage, slidesCollection };
// export { initFirebase, db, auth }
