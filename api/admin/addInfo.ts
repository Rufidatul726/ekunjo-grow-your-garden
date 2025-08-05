// utils/registerUser.js
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig"

export const registerNursery = async (data: object) => {
  try {
    const docRef= await addDoc(collection(db, "nurseries"), {
        data        
    });

    console.log("Nursery is added with the reference ", docRef.id);

    return docRef;
  } catch (error) {
    console.error("Error registering user:", error);
  }
};
