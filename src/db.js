import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyAZ9bUBAETfMFs9SjTAXdWv1usDlX2kwwo",
    authDomain: "vue-chat-33036.firebaseapp.com",
    projectId: "vue-chat-33036",
    storageBucket: "vue-chat-33036.appspot.com",
    messagingSenderId: "434398937477",
    appId: "1:434398937477:web:6867ad62b22eee76ec84ec",
    databaseURL:"https://vue-chat-33036-default-rtdb.europe-west1.firebasedatabase.app/"
  };
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
export default db;