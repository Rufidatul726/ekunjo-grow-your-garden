'use client';

import { useAuth } from '@/context/AuthContext';
import {
  Sparkles,
  MessageCircle,
  NotebookText,
  Leaf as Plant,
  AlertCircle,
} from 'lucide-react';

export default function CustomerDashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-green-900">Welcome, {user?.displayName}!</h1>
        <span className="bg-green-200 text-green-800 px-4 py-1 rounded-full text-sm">Customer</span>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="My Plants"
          description="Track and manage your garden"
          icon={<Plant size={36} className="text-green-600" />}
          href="/customer/my-plants"
        />
        <DashboardCard
          title="My Guides"
          description="Manage and keep your own plant guides"
          icon={<NotebookText size={36} className="text-green-600" />}
          href="/customer/my-guides"
        />
        {/* <DashboardCard
          title="Chat Support"
          description="Talk to service providers"
          icon={<MessageCircle size={36} className="text-green-600" />}
          href="/customer/chat"
        /> */}
        <DashboardCard
          title="Support Issues"
          description="Create or view support requests"
          icon={<AlertCircle size={36} className="text-green-600" />}
          href="/customer/issues" // can point to a list of their issues
        />
      </div>

      {/* Tip of the Day */}
      <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4 border-l-4 border-green-500">
        <Sparkles size={40} className="text-green-500" />
        <div>
          <h2 className="text-xl font-semibold text-green-900">🌿 Tip of the Day</h2>
          <p className="text-gray-700">
            Mix kitchen compost with soil for nutrient-rich gardening. Bonus: it reduces waste too!
          </p>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, description, icon, href }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border border-green-100 hover:border-green-300 flex flex-col items-start gap-4"
    >
      {icon}
      <div>
        <h3 className="text-lg font-bold text-green-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </a>
  );
}
