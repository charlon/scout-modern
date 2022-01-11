import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_KEY,
  authDomain: import.meta.env.VITE_FB_ID + ".firebaseapp.com",
  projectId: import.meta.env.VITE_FB_ID,
  storageBucket: import.meta.env.VITE_FB_ID + ".appspot.com",
  messagingSenderId: import.meta.env.VITE_FB_MSG_ID,
  appId: import.meta.env.VITE_FB_APP_ID
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();