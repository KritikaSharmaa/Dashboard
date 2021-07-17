import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4Z8yNpqwvYqCyyyQL8zWtAeKEmQmK3AQ",
  authDomain: "dashfirepwa-d60bc.firebaseapp.com",
  projectId: "dashfirepwa-d60bc",
  storageBucket: "dashfirepwa-d60bc.appspot.com",
  messagingSenderId: "1019011708984",
  appId: "1:1019011708984:web:9724ef9e4373c1c9df4ecd",
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
