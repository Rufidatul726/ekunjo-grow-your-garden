"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useRouter } from "next/navigation";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const guideSchema = z.object({
  plantName: z.string().min(1, "Plant name is required"),
  category: z.string().min(1, "Category is required"),
  watering: z.string().min(1, "Watering info is required"),
  sunlight: z.string().min(1, "Sunlight info is required"),
  temperature: z.string().min(1, "Temperature info is required"),
  soil: z.string().min(1, "Soil info is required"),
  care: z.string().min(1, "Care instructions are required"),
  fertilizing: z.string().min(1, "Fertilizing info is required"),
  pruning: z.string().min(1, "Pruning info is required"),
  propagation: z.string().min(1, "Propagation info is required"),
  repotting: z.string().min(1, "Repotting info is required"),
});

type GuideFormData = z.infer<typeof guideSchema>;

interface GuideFormProps {
  initialData?: GuideFormData & { id?: string };
}

export default function GuideForm({ initialData }: GuideFormProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<GuideFormData>({
    resolver: zodResolver(guideSchema),
    defaultValues: initialData || {
      plantName: "",
      category: "",
      watering: "",
      sunlight: "",
      temperature: "",
      soil: "",
      care: "",
      fertilizing: "",
      pruning: "",
      propagation: "",
      repotting: "",
    },
  });

  const onSubmit = async (data: GuideFormData) => {
    try {
      if (initialData?.id) {
        const guideRef = doc(db, "guides", initialData.id);
        await updateDoc(guideRef, data);
      } else {
        await addDoc(collection(db, "guides"), data);
      }
      router.push("/guides");
    } catch (error) {
      console.error("Error saving guide:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Plant Name */}
      <div>
        <Label htmlFor="plantName">Plant Name</Label>
        <Input id="plantName" {...register("plantName")} />
        {errors.plantName && <p className="text-sm text-red-500">{errors.plantName.message}</p>}
      </div>

      {/* Category */}
      <div>
        <Label htmlFor="category">Category</Label>
        <Select defaultValue={initialData?.category} onValueChange={(val) => {
          // Directly update category in react-hook-form
          const event = { target: { value: val, name: "category" } };
          register("category").onChange(event);
        }}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Fruit">Fruit</SelectItem>
            <SelectItem value="Leafy">Leafy</SelectItem>
            <SelectItem value="Root">Root</SelectItem>
            <SelectItem value="Herb">Herb</SelectItem>
          </SelectContent>
        </Select>
        {errors.category && <p className="text-sm text-red-500">{errors.category.message}</p>}
      </div>

      {/* Watering */}
      <div>
        <Label htmlFor="watering">Watering</Label>
        <Input id="watering" {...register("watering")} />
        {errors.watering && <p className="text-sm text-red-500">{errors.watering.message}</p>}
      </div>

      {/* Sunlight */}
      <div>
        <Label htmlFor="sunlight">Sunlight</Label>
        <Input id="sunlight" {...register("sunlight")} />
        {errors.sunlight && <p className="text-sm text-red-500">{errors.sunlight.message}</p>}
      </div>

      {/* Temperature */}
      <div>
        <Label htmlFor="temperature">Temperature</Label>
        <Input id="temperature" {...register("temperature")} />
        {errors.temperature && <p className="text-sm text-red-500">{errors.temperature.message}</p>}
      </div>

      {/* Soil */}
      <div>
        <Label htmlFor="soil">Soil</Label>
        <Input id="soil" {...register("soil")} />
        {errors.soil && <p className="text-sm text-red-500">{errors.soil.message}</p>}
      </div>

      {/* Care Instructions */}
      <div>
        <Label htmlFor="care">General Care Instructions</Label>
        <Textarea id="care" {...register("care")} rows={3} />
        {errors.care && <p className="text-sm text-red-500">{errors.care.message}</p>}
      </div>

      {/* Fertilizing */}
      <div>
        <Label htmlFor="fertilizing">Fertilizing</Label>
        <Textarea id="fertilizing" {...register("fertilizing")} rows={3} />
        {errors.fertilizing && <p className="text-sm text-red-500">{errors.fertilizing.message}</p>}
      </div>

      {/* Pruning */}
      <div>
        <Label htmlFor="pruning">Pruning</Label>
        <Textarea id="pruning" {...register("pruning")} rows={3} />
        {errors.pruning && <p className="text-sm text-red-500">{errors.pruning.message}</p>}
      </div>

      {/* Propagation */}
      <div>
        <Label htmlFor="propagation">Propagation</Label>
        <Textarea id="propagation" {...register("propagation")} rows={3} />
        {errors.propagation && <p className="text-sm text-red-500">{errors.propagation.message}</p>}
      </div>

      {/* Repotting */}
      <div>
        <Label htmlFor="repotting">Repotting</Label>
        <Textarea id="repotting" {...register("repotting")} rows={3} />
        {errors.repotting && <p className="text-sm text-red-500">{errors.repotting.message}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button type="submit" disabled={isSubmitting}>
          {initialData ? "Update Guide" : "Create Guide"}
        </Button>
      </div>
    </form>
  );
}
