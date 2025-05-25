// ServiceChatInput.tsx
import { useState } from "react";
import { auth } from "@/firebaseConfig";

export default function ServiceChatInput({ selectedChatId }: { selectedChatId: string }) {
  const [text, setText] = useState("");

  const sendMessage = async () => {
    const user = auth.currentUser;
    if (!text || !user) return;

    await fetch("/api/customer/chats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        senderId: user.uid,
        selectedChatId,
        isServiceReply: true
      })
    });
    setText("");
  };

  return (
    <div className="p-4 border-t flex">
      <input
        className="flex-1 p-2 border rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Reply to customer..."
      />
      <button onClick={sendMessage} className="ml-2 bg-green-500 text-white px-4 py-2 rounded">
        Send
      </button>
    </div>
  );
}