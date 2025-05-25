'use client';

import { useEffect, useState } from 'react';
import { db } from '@/firebaseConfig';
import { collection, addDoc, onSnapshot, Timestamp, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useAuth } from '@/components/context/AuthContext';
import { Archive, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Plant } from '@/types/plants'; 

const formSchema = z.object({
  name: z.string().min(1),
  sunlight: z.string().min(1),
  water: z.string().min(1),
  notes: z.string().optional(),
  growthStage: z.string().optional(),
});

export default function MyPlantsPage() {
  const { user } = useAuth();
  const [plants, setPlants] = useState<Plant[]>([]);
  const [editingPlant, setEditingPlant] = useState<Plant | null>(null);

  useEffect(() => {
    if (!user) return;
    const unsub = onSnapshot(
      collection(db, 'users', user.uid, 'plants'),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Plant));
        setPlants(data);
      }
    );
    return () => unsub();
  }, [user]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      sunlight: '',
      water: '',
      notes: '',
      growthStage: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!user) return;
    if (editingPlant) {
      await updateDoc(doc(db, 'users', user.uid, 'plants', editingPlant.id), values);
      setEditingPlant(null);
    } else {
      await addDoc(collection(db, 'users', user.uid, 'plants'), {
        ...values,
        addedAt: Timestamp.now(),
      });
    }
    form.reset();
  }

  async function archivePlant(id: string) {
    if (!user) return;
    await deleteDoc(doc(db, 'users', user.uid, 'plants', id));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-green-900">My Plants</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button onClick={() => setEditingPlant(null)}>Add Plant</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>{editingPlant ? 'Edit Plant' : 'Add New Plant'}</DialogTitle>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 mt-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Rose, Basil..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sunlight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sunlight</FormLabel>
                      <FormControl>
                        <Input placeholder="Full sun, partial shade..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="water"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Watering</FormLabel>
                      <FormControl>
                        <Input placeholder="Every 2 days..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notes</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Optional notes..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="growthStage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Growth Stage</FormLabel>
                      <FormControl>
                        <Input placeholder="Seedling, Vegetative, Flowering..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end gap-2">
                  <DialogClose asChild>
                    <Button variant="outline" type="button">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">{editingPlant ? 'Update' : 'Add'}</Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plants.map((plant) => {
          const now = Date.now();
          const addedAt = plant.addedAt instanceof Timestamp ? plant.addedAt.toDate().getTime() : 0;
          const daysSinceAdded = Math.floor((now - addedAt) / (1000 * 60 * 60 * 24));

          return (
            <div key={plant.id} className="bg-white rounded-xl border p-4 shadow space-y-2">
              <div className="flex justify-between">
                <h2 className="font-bold text-green-900 text-lg">{plant.name}</h2>
                <div className="space-x-2">
                  <Button variant="ghost" size="sm" onClick={() => archivePlant(plant.id)}>
                    <Archive className="h-4 w-4" />
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          form.reset(plant);
                          setEditingPlant(plant);
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle>Edit Plant</DialogTitle>
                      <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="space-y-4 mt-4"
                        >
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Rose, Basil..." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="sunlight"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Sunlight</FormLabel>
                                <FormControl>
                                  <Input placeholder="Full sun, partial shade..." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="water"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Watering</FormLabel>
                                <FormControl>
                                  <Input placeholder="Every 2 days..." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="notes"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Notes</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="Optional notes..." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="growthStage"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Growth Stage</FormLabel>
                                <FormControl>
                                  <Input placeholder="Seedling, Vegetative, Flowering..." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="flex justify-end gap-2">
                            <DialogClose asChild>
                              <Button variant="outline" type="button">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Update</Button>
                          </div>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <p className="text-sm text-gray-700">☀️ {plant.sunlight}</p>
              <p className="text-sm text-gray-700">💧 {plant.water}</p>
              {plant.notes && <p className="text-sm text-gray-600">📝 {plant.notes}</p>}
              {plant.growthStage && <p className="text-sm text-green-700">🌱 Stage: {plant.growthStage}</p>}
              <p className="text-sm text-blue-700">📆 Added {daysSinceAdded} day{daysSinceAdded !== 1 ? 's' : ''} ago</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
