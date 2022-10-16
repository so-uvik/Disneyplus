import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6B36r1FNR_kENIPckOsKc7dNAD1ptrBM",
  authDomain: "react-disneyplus-43724.firebaseapp.com",
  databaseURL:'https://react-disneyplus-43724-default-rtdb.firebaseio.com/',
  projectId: "react-disneyplus-43724",
  storageBucket: "react-disneyplus-43724.appspot.com",
  messagingSenderId: "365663530499",
  appId: "1:365663530499:web:6f35264de6e2aa8cd7a836"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const storage = getStorage()

export { app, db, storage }
