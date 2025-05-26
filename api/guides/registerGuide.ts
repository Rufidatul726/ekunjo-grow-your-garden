import { db } from '@/firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { Guide } from '@/types/guides';

export async function registerGuide(
   title: string,
   difficulty: 'Beginner' | 'Intermediate' | 'Advanced',
    categories: string[],
    tools: string,
    timeEstimate: string,
    steps: string,
    authorId: string,
    authorName: string,
    createdAt: any = serverTimestamp()
    ) {
    try {
        const guideData: Omit<Guide, 'id'> = {
            title,
            difficulty,
            categories,
            tools,
            timeEstimate,
            steps,
            authorId,
            authorName,
            createdAt
        };

        const docRef = await addDoc(collection(db, 'guides'), guideData);
        return { id: docRef.id, ...guideData };
    }
    catch (error) {
        console.error('Error registering guide:', error);
        throw new Error('Failed to register guide');
    }
}
