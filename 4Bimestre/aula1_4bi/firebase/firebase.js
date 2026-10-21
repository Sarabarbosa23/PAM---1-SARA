import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyAKMEkCphO0ZfNK1LkEFb9vs3UOnefFA1c",
  authDomain: "projetopam-b4654.firebaseapp.com",
  projectId: "projetopam-b4654",
  storageBucket: "projetopam-b4654.firebasestorage.app",
  messagingSenderId: "346558567440",
  appId: "1:346558567440:web:593be7248cae1e277be695"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);