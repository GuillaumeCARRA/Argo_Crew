import firebase from 'firebase';

//we initialize the application 
//with the config we get on firebase
const firebaseApp = firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain:`${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
  measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`
});

// firestore is the db that we're going to be using
// it's a real time db
// it's going to allow us to keep track of what 
// the user's is correct
const db = firebaseApp.firestore();

export default db;