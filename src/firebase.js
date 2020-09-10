import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAyzQnDJDPcKXwtDekf71R-tjwa-Q_JzHE",
  authDomain: "fir-final-4454b.firebaseapp.com",
  databaseURL: "https://fir-final-4454b.firebaseio.com",
  projectId: "fir-final-4454b",
  storageBucket: "fir-final-4454b.appspot.com",
  messagingSenderId: "872571085632",
  appId: "1:872571085632:web:ebcbdda9d49a23b873d0a5",
  measurementId: "G-15Q50S6GCM",
};

const fbsConfig = firebase.initializeApp(firebaseConfig);
const auth = fbsConfig.auth();
const googleAuth = new firebase.auth.GoogleAuthProvider();
const firestore = fbsConfig.firestore();
const db = fbsConfig.database();
export { auth, googleAuth, firestore, db };
export default fbsConfig;
