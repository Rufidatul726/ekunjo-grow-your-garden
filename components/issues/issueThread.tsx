"use client";

import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  Timestamp,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { useAuth } from "@/context/AuthContext";
import { CheckCircle2 } from "lucide-react";

type Message = {
  id: string;
  text?: string;
  sender?: string;
  senderId?: string;
  timestamp?: { seconds: number; nanoseconds: number };
};

export default function IssueThread({ issueId }: { issueId: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMsg, setNewMsg] = useState("");
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    const q = query(
      collection(db, "issues", issueId, "messages"),
      orderBy("timestamp", "asc")
    );

    const unsub = onSnapshot(q, async (snapshot) => {
      const msgList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];
      setMessages(msgList);

      if (msgList.length === 0) return;

      const lastMsg = msgList[msgList.length - 1];
      const lastTimestamp = (lastMsg.timestamp?.seconds ?? 0) * 1000;
      const now = Date.now();
      const threeDaysInMs = 3 * 24 * 60 * 60 * 1000;

      const issueRef = doc(db, "issues", issueId);
      const issueSnap = await getDoc(issueRef);
      const currentStatus = issueSnap.data()?.status;

      if (msgList.length > 1 && currentStatus !== "On Progress") {
        await updateDoc(issueRef, { status: "On Progress" });
        setStatus("On Progress");
      } else if (now - lastTimestamp > threeDaysInMs && currentStatus !== "Resolved") {
        await updateDoc(issueRef, { status: "Resolved" });
        setStatus("Resolved");
      }
    });

    return () => unsub();
  }, [issueId]);

  useEffect(() => {
    const fetchIssue = async () => {
      const issueSnap = await getDoc(doc(db, "issues", issueId));
      if (issueSnap.exists()) {
        const data = issueSnap.data();
        setTopic(data.topic || "");
        setStatus(data.status || "Open");
      }
    };

    fetchIssue();
  }, [issueId]);

  const sendMessage = async () => {
    if (!newMsg.trim() || !user) return;

    await addDoc(collection(db, "issues", issueId, "messages"), {
      text: newMsg.trim(),
      sender: user.displayName,
      senderId: user.uid,
      timestamp: Timestamp.now(),
    });

    setNewMsg("");
  };

  const handleMarkResolved = async () => {
    await updateDoc(doc(db, "issues", issueId), { status: "Resolved" });
    setStatus("Resolved");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved":
        return "bg-green-100 text-green-700";
      case "On Progress":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-black-100 text-black-700";
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{topic}</h2>
        <div className="flex items-center gap-2">
          <span
            className={`text-sm font-medium px-3 py-1 rounded-full ${getStatusColor(
              status
            )}`}
          >
            {status}
          </span>
          {status !== "Resolved" && (
            <button
              onClick={handleMarkResolved}
              className="flex items-center gap-1 text-sm text-green-700 hover:text-green-900 transition"
            >
              <CheckCircle2 className="w-5 h-5" />
              Mark Resolved
            </button>
          )}
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg shadow max-h-[500px] overflow-y-auto mb-4 space-y-2">
        {messages.map((msg) => {
          const isCurrentUser = msg.senderId === user?.uid;
          return (
            <div key={msg.id} className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
              <div
                className={`relative px-4 py-3 rounded-lg max-w-[80%] ${
                  isCurrentUser
                    ? "bg-green-600 text-white rounded-br-none"
                    : "bg-white text-gray-800 border rounded-bl-none"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <span className="text-xs text-gray-300 block mt-1">
                  {new Date((msg.timestamp?.seconds || 0) * 1000).toLocaleString()}
                </span>
                <div
                  className={`absolute w-3 h-3 rotate-45 ${
                    isCurrentUser
                      ? "bg-green-600 -right-1 bottom-2"
                      : "bg-white -left-1 bottom-2 border-l border-b"
                  }`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="sticky bottom-4 bg-white flex gap-2 items-center border rounded-lg p-2 shadow-md">
        <input
          className="flex-1 px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Type your reply..."
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
