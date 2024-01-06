import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqrUj_Fazq3h9EAw7u-_skzt3vwcUVhJs",
  authDomain: "hochzeit-b2cf1.firebaseapp.com",
  projectId: "hochzeit-b2cf1",
  storageBucket: "hochzeit-b2cf1.appspot.com",
  messagingSenderId: "1085819095961",
  appId: "1:1085819095961:web:fb4f61d1bc26c1d372e108",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
