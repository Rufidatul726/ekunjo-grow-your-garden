export type issueType = {
  id: string;
    topic: string;
    createdAt: { seconds: number; nanoseconds: number };
    createdBy: string;
    status: "Open" | "On Progress" | "Resolved";
    messages: Message[];
};

export type Message = {
    id: string;
    text?: string;
    sender?: string;
    senderId?: string;
    timestamp?: { seconds: number; nanoseconds: number };
};