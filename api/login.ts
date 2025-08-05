// api/auth/loginUser.js
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginUser = async (email: string, password: string) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User logged in:", user);
    
    return user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
