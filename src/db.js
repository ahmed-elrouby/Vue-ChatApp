import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import "firebase/database";
const firebaseConfig = {
  };
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
export default db;
