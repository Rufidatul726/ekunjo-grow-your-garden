'use client';

import { useState } from 'react';

const TAGS = [
  'Vegetables', 'Herbs', 'Fruits', 'Composting', 'Rooftop Gardening',
  'Balcony Gardening', 'Pest Management', 'DIY Projects', 'Beginner Friendly',
];

export function TagSelector({ selected, setSelected }: {
  selected: string[];
  setSelected: (tags: string[]) => void;
}) {
  const toggleTag = (tag: string) => {
    setSelected(
      selected.includes(tag)
        ? selected.filter(t => t !== tag)
        : [...selected, tag]
    );
  };

  return (
    <div className="flex flex-wrap gap-2">
      {TAGS.map(tag => (
        <button
          key={tag}
          type="button"
          onClick={() => toggleTag(tag)}
          className={`px-3 py-1 text-sm rounded-full border ${
            selected.includes(tag)
              ? 'bg-green-600 text-white border-green-600'
              : 'bg-white text-green-700 border-green-300'
          } hover:shadow transition`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
