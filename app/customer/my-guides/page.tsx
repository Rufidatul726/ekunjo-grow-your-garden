'use client';

import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/firebaseConfig';
import { addDoc, collection, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { TagSelector } from '@/components/TagSelector';
import { useAuth } from '@/components/context/AuthContext';
import { Guide } from '@/types/guides';
import GuideStepsRenderer from '@/components/guideStepsRenderer';

export default function NewGuidePage() {
  const router = useRouter();
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState('Beginner');
  const [categories, setCategories] = useState<string[]>([]);
  const [tools, setTools] = useState('');
  const [timeEstimate, setTimeEstimate] = useState('');
  const [steps, setSteps] = useState('');
  const [guides, setGuides] = useState<Guide[]>([]);

  const handleSubmit = async () => {
    if (!title || !steps || categories.length === 0) {
      toast.error('Please fill out all required fields');
      return;
    }

    try {
      await addDoc(collection(db, 'guides'), {
        title,
        difficulty,
        categories,
        tools,
        timeEstimate,
        steps,
        authorId: user?.uid,
        authorName: user?.displayName,
        createdAt: serverTimestamp(),
      });

      toast.success('Guide created successfully!');
      router.push('/customer/my-guides');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong.');
    }
  };

  useEffect(() => {
    if (!user?.uid) return;
    const unsub = onSnapshot(
        collection(db, 'guides'),
        (snapshot) => {
            const guides = snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as Omit<Guide, 'id'>) })) as Guide[];
            setGuides(guides);
            if (guides.length === 0) {
                toast.info('No guides found. Start creating your first guide!');
            }
        },
        (error) => {
            console.error('Error fetching guides:', error);
        }
        );
    return () => unsub();
    }, [user?.uid]);


  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
        {
        guides.length > 0 && (
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h2 className="text-lg font-semibold text-green-800">Existing Guides</h2>
          <ul className="mt-2 space-y-2">
            {guides.map((guide, index) => (
              <li key={index} className="text-sm text-gren-700">
                <details className="group">
                    {guide.title} - {guide.difficulty} ({guide.categories.join(', ')})
                <summary className="cursor-pointer mt-1">
                  <span className="text-green-600 font-medium">{guide.title}</span>
                </summary>
                <p className="text-gray-600 mt-1">Author: {guide.authorName}</p>
                <p className="text-gray-500 mt-1">Created at: {new Date((guide.createdAt as any)?.toDate()).toLocaleDateString()}</p>
                <p className="text-gray-500 mt-1">Estimated time: {guide.timeEstimate}</p>
                <p className="text-gray-500 mt-1">Tools needed: {guide.tools}</p>
                <p className="text-gray-500 mt-1">Steps:
                    <GuideStepsRenderer rawSteps={guide.steps} />
                </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
        )
        }

      <h1 className="text-3xl font-bold text-green-900">🌱 Create a New Guide</h1>

      <div className="bg-white p-6 rounded-xl shadow border space-y-4">
        <Input
          placeholder="Guide title (e.g., How to Grow Tomatoes in Buckets)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className="w-full border rounded p-2 text-sm"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <TagSelector selected={categories} setSelected={setCategories} />

        <Input
          placeholder="Estimated time (e.g., 2 weeks, 30 mins/day)"
          value={timeEstimate}
          onChange={(e) => setTimeEstimate(e.target.value)}
        />

        <Textarea
          placeholder="Tools needed (e.g., pots, compost, seeds)"
          value={tools}
          onChange={(e) => setTools(e.target.value)}
        />

        <Textarea
          placeholder="Write your steps using markdown..."
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          rows={10}
        />

        <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white">
          🚀 Publish Guide
        </Button>
      </div>

        <p className="text-sm text-gray-500">
            Guides are a great way to share your knowledge and help others in the community. Make sure to provide clear and detailed steps!
        </p>
    </motion.div>
  );
}
