import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth, 
        createUserWithEmailAndPassword, 
        updateCurrentUser,
        signInWithEmailAndPassword,
        
      } from 'firebase/auth';

import {getStorage} from 'firebase/storage'
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDcBcPcnQxtyjP4-dHo3oFLjxtqFzD036g",
  authDomain: "active-advisor-e469f.firebaseapp.com",
  databaseURL: "https://active-advisor-e469f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "active-advisor-e469f",
  storageBucket: "active-advisor-e469f.appspot.com",
  messagingSenderId: "988269080834",
  appId: "1:988269080834:web:faa8c738f7dd40789e921b"
};
  const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);
  getAnalytics(app);
  export const auth = getAuth(app);

  export const db = getDatabase(app);

  export const signUp = async ( name, email, password) => {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateCurrentUser(auth, {displayName: name});
  }

  export const signIn = async ( email, password) => {
    await signInWithEmailAndPassword(auth, email, password)

  }

  
  
 