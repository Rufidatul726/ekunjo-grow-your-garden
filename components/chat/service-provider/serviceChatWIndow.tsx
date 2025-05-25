import { useEffect, useState } from "react";
import { onSnapshot, collection, orderBy, query, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { useAuth } from "@/components/context/AuthContext";
import ServiceChatInput from "./serviceChatInput";

interface Message {
  id: string;
  text: string;
  senderId: string;
  timestamp?: any;
  isServiceReply?: boolean;
}

interface Props {
  selectedChatId: string;
}

export default function ServiceChatWindow({ selectedChatId }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<Record<string, any>>({});
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "chats", selectedChatId, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const msgs: Message[] = await Promise.all(
        snapshot.docs.map(async (docSnap) => {
          const data = docSnap.data();
          if (!users[data.senderId]) {
            const userDoc = await getDoc(doc(db, "users", data.senderId));
            if (userDoc.exists()) {
              setUsers((prev) => ({ ...prev, [data.senderId]: userDoc.data() }));
            }
          }
          return {
            id: docSnap.id,
            text: data.text,
            senderId: data.senderId,
            timestamp: data.timestamp,
            isServiceReply: data.isServiceReply,
          };
        })
      );
      setMessages(msgs);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [selectedChatId, users]);

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        {loading ? (
          <p>Loading messages...</p>
        ) : messages.length === 0 ? (
          <div className="text-center text-gray-500">
            <p>No customer messages yet.</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`my-2 p-2 rounded max-w-md ${msg.senderId === user?.uid ? "bg-green-200 ml-auto" : "bg-gray-200"}`}
            >
              <p className="text-sm text-gray-700">{users[msg.senderId]?.name || "Anonymous Customer"}</p>
              <p>{msg.text}</p>
            </div>
          ))
        )}
      </div>
      <ServiceChatInput selectedChatId={selectedChatId} />
    </div>
  );
}