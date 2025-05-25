"use client";

import { useState } from "react";
import {
  collection,
  addDoc,
  Timestamp,
  doc,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/context/AuthContext"; 
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function CreateIssueForm() {
  const [topic, setTopic] = useState("");
  const [initialMessage, setInitialMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth(); // Get current logged-in customer
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic || !initialMessage) return;

    setLoading(true);

    try {
      // 1. Create the issue
      const issueRef = await addDoc(collection(db, "issues"), {
        topic,
        createdBy: user?.uid,
        status: "Open",
        createdAt: Timestamp.now(),
      });

      // 2. Add first message in subcollection
      await addDoc(collection(db, "issues", issueRef.id, "messages"), {
        text: initialMessage,
        sender: user?.displayName || "Anonymous",
        senderId: user?.uid,
        timestamp: Timestamp.now(),
      });

      const role = user?.role || "customer"; // Default to 'customer' if role is not set
      // 3. Redirect to thread view
      router.push(`/${role}/issues/${issueRef.id}`);
    } catch (error) {
      console.error("Error creating issue:", error);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow rounded-md space-y-4"
    >
      <h2 className="text-2xl font-bold">Start a New Support Request</h2>

      <div>
        <Label className="block text-sm font-medium text-gray-700">Topic</Label>
        <Input
          className="mt-1 block w-full border px-4 py-2 rounded-md"
          placeholder="Brief title for your issue"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>

      <div>
        <Label className="block text-sm font-medium text-gray-700">Details</Label>
        <Textarea
          className="mt-1 block w-full border px-4 py-2 rounded-md"
          placeholder="Describe your issue in detail"
          rows={4}
          value={initialMessage}
          onChange={(e) => setInitialMessage(e.target.value)}
        />
      </div>

      <Button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-md"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Issue"}
      </Button>
    </form>
  );
}
