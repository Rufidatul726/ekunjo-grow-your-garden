export type Guide = {
    authorId: string;
    authorName: string;
    categories: string[];
    createdAt: Date;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    steps: string;
    timeEstimate: string;
    title: string;
    tools: string;
};
