'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/firebaseConfig'; 

export default function SupportDashboard() {
  const [issues, setIssues] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchIssues() {
      setLoading(true);
      try {
        const q = query(collection(db, 'issues'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const issuesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));    
        setIssues(issuesData);
      } catch (error) {
        console.error('Error fetching issues:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchIssues();
  }, []);

  const filteredIssues = issues.filter((issue) => {
    const matchesStatus = selectedStatus === 'All' || issue.status === selectedStatus;
    const matchesSearch =
      issue.userName?.toLowerCase().includes(search.toLowerCase()) ||
      issue.email?.toLowerCase().includes(search.toLowerCase()) ||
      issue.topic?.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Customer Support Panel</h1>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name, email, topic..."
          className="border px-4 py-2 rounded-md w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-4 py-2 rounded-md w-full md:w-1/4"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      {/* Issues List */}
      {loading ? (
        <p className="text-gray-500">Loading issues...</p>
      ) : filteredIssues.length === 0 ? (
        <p className="text-gray-500">No issues found.</p>
      ) : (
        <div className="grid gap-4">
          {filteredIssues.map((issue) => (
            <div key={issue.id} className="bg-white border p-4 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h2 className="font-semibold text-lg">{issue.topic}</h2>
                  <p className="text-sm text-gray-500">{issue.email} • {new Date(issue.createdAt?.toDate()).toLocaleDateString()}</p>
                </div>
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${
                    issue.status === 'Open'
                      ? 'bg-red-100 text-red-600'
                      : issue.status === 'In Progress'
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-green-100 text-green-600'
                  }`}
                >
                  {issue.status}
                </span>
              </div>
              <p className="text-gray-700 mb-3">{issue.messages}</p>
              <a
                href={`/customer_service_provider/issues/${issue.id}`}
                className="text-sm text-green-600 hover:underline font-medium"
              >
                Respond
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
