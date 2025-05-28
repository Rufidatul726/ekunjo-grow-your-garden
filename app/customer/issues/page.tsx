// app/customer/issues/page.tsx
"use client";

import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import CreateIssueForm from "@/components/issues/issueForm";
import { issueType } from "@/types/issues";

export default function CustomerIssuePage() {
  const { user } = useAuth();
  const [myIssues, setMyIssues] = useState<issueType[]>([]);

  useEffect(() => {
    if (!user?.uid) return;

    const q = query(collection(db, "issues"), where("userId", "==", user.uid));
    const unsub = onSnapshot(q, (snapshot) => {
      setMyIssues(
        snapshot.docs.map(
          (doc) => ({ id: doc.id, ...(doc.data() as Omit<issueType, 'id'>) })
        ) as issueType[]
      );
    });

    return () => unsub();
  }, [user?.uid]);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">Customer Support</h1>

      <CreateIssueForm />

      <div>
        <h2 className="text-xl font-semibold mt-8 mb-4">Your Issues</h2>
        {myIssues.length === 0 ? (
          <p className="text-gray-500">No issues created yet.</p>
        ) : (
          <ul className="space-y-3">
            {myIssues.map((issue) => (
              <li
                key={issue.id}
                className="border p-4 rounded-lg flex justify-between items-center hover:shadow-md transition"
              >
                <div>
                  <p className="font-medium">{issue.topic}</p>
                  <p className="text-sm text-gray-500">{issue.status} • {new Date(issue.createdAt?.seconds * 1000).toLocaleDateString()}</p>
                </div>
                <Link
                  href={`/customer/issues/${issue.id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  View Conversation
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
