import { useState } from "react";
import { sendMessage } from "@/api/customer/chat";
import { useAuth } from "../../context/AuthContext";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function ChatInput({ selectedChatId }: { selectedChatId: string }) {
  const [text, setText] = useState("");
  const { user } = useAuth();

  const handleSendMessage = async () => {
    if (!text || !user) return;

    sendMessage(selectedChatId, text, user.uid);
    setText("");
  };

  return (
    <div className="p-4 border-t border-green-500 flex">
      <Input
        className="flex-1 p-2 border-green-600 rounded focus-visible:border-none focus-visible:ring-green-500"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask your question..."
      />
      <Button onClick={handleSendMessage} className="ml-2 bg-green-600 text-white px-4 py-2 rounded">
        Send
      </Button>
    </div>
  );
}
