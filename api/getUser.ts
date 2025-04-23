import { db } from "@/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const getUser = async (uid: string) => {
  try {
    const userDoc = await getDoc(doc(db, "users", uid))
    
    if (userDoc.exists()) {
        const userData = userDoc.data()
        return userData; 
    } else {
      console.log("No such user document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};