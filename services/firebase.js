import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import {
  apiKey,
  authDomain,  
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId
} from  '@env';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,  
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const Database = getFirestore(app);

export default Database
