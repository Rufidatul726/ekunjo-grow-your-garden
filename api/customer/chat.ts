import { db } from "@/firebaseConfig";
import { addDoc, collection, getDocs, orderBy, query } from "firebase/firestore";


export const sendMessage = async (chatId: string, text: string, senderId: string, file?: File | null, isServiceReply = false) => {
  if (!chatId || !senderId) return;


  if (!text.trim() && !file) return;
  if (file) {
    // Handle file upload logic here, e.g., upload to Firebase Storage and get the URL
    // For now, we will just log the file
    console.log("File to upload:", file);
    // You would typically upload the file and get a URL back
  }


  try {
    await addDoc(collection(db, "chats", chatId, "messages"), {
        text,
        senderId,
        timestamp: new Date().toISOString(),
        isServiceReply,
      }).then
    (() => {
        console.log("Message sent successfully");
      })
  } catch (error) {
    console.error("Error sending message:", error);
  }
}


export const getChatId = (userId: string, otherUserId: string) => {
  if (!userId || !otherUserId) return "";
  return [userId, otherUserId].sort().join("_");
}


export const getMessages = async (chatId: string) => {
  if (!chatId) return [];


  const messagesRef = collection(db, "chats", chatId, "messages")
  const q = query(messagesRef, orderBy("timestamp", "asc"));
  const snapshot = await getDocs(q);


  const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));


  return messages
}