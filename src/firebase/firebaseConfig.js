import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB4xc0uN0wozyXF6Q3ubL4GNnoSD5CTgW8",
    authDomain: "clone-front-end-project-c88cc.firebaseapp.com",
    projectId: "clone-front-end-project-c88cc",
    storageBucket: "clone-front-end-project-c88cc.appspot.com",
    messagingSenderId: "931197052697",
    appId: "1:931197052697:web:166c20b2e25552d5748788",
    measurementId: "G-MLSNPWCSG7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();////which is imported from firebase/app
export { db, auth }; //here we export db and auth to login component 