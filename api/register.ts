// utils/registerUser.js
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const registerUser = async (
    email : string, 
    password: string, 
    userName: string, 
    role: string
) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName: userName });

    await setDoc(doc(db, "users", user.uid), {
      userName,
      role,
      email
    });

    console.log("User registered with role:", role);

    return user;
  } catch (error) {
    console.error("Error registering user:", error);
  }
};
