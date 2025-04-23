import { db } from "@/firebaseConfig";
import { UserDetail } from "@/types/user";
import { collection, getDocs } from "firebase/firestore";

export const getAllUsers = async() => {
    try{
        const querySnapshot = await getDocs(collection(db, "users"));
        const userDoc: UserDetail[] = []
        querySnapshot.forEach((doc: any) => {
            // console.log(doc.id, " => ", doc.data());
            userDoc.push(doc.data())
        });

        return userDoc;
    }catch(error){
        console.error("Error fetching user data:", error);
        throw error;
    }
}