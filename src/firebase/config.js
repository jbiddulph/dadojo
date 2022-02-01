import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDxNE9GfQnbSTg27TU9tixt_Ixw7gsJni4",
    authDomain: "brighton-cded9.firebaseapp.com",
    databaseURL: "https://brighton-cded9.firebaseio.com",
    projectId: "brighton-cded9",
    storageBucket: "brighton-cded9.appspot.com",
    messagingSenderId: "702332351389",
    appId: "1:702332351389:web:862791a97276c655073574"
};



// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore  = firebase.firestore()
const projectAuth = firebase.auth() 
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }