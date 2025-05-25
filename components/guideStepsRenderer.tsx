'use client';

export default function GuideStepsRenderer({ rawSteps }: { rawSteps: string }) {
  const stepDescriptions: string[] = rawSteps
    .split('###')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((stepText) => {
      // Strip out emoji, title (e.g., "Step 1: ..."), and return only the description
      const parts = stepText.split(/Step\s*\d+.*?:\s*/i);
      return parts.length > 1 ? parts[1].trim() : stepText;
    });

  return (
    <ol className="list-decimal list-inside text-gray-700 space-y-2 mt-2 ml-2">
      {stepDescriptions.map((desc, index) => (
        <li key={index} className="text-gray-600">
          {desc}
        </li>
      ))}
    </ol>
  );
}
