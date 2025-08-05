"use client";

import {  useState } from "react";

const chatIds = ["general"];

export default function ChatList({ onSelectChat }: { onSelectChat: (id: string) => void }) {
  const [selected, setSelected] = useState("general");

  const handleSelect = (id: string) => {
    setSelected(id);
    onSelectChat(id);
  };

  return (
    <div className="w-64 border-r p-4">
      <h2 className="text-lg font-bold mb-4">Chats</h2>
      {chatIds.map((id) => (
        <div
          key={id}
          onClick={() => handleSelect(id)}
          className={`p-2 cursor-pointer rounded ${selected === id ? "bg-blue-200" : "hover:bg-gray-100"}`}
        >
          {id === "general" ? "General Support" : id}
        </div>
      ))}
    </div>
  );
}