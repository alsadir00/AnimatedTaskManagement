import React, { useState } from "react";
import { projects } from "../data/project";

const Reports = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Filter + search
  const filteredProjects = projects.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || p.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-rose-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 p-6 space-y-8">


      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold">📊 Reports Dashboard</h1>
        <div className="flex gap-2">
          <input type="date" className="px-3 py-2 rounded-lg bg-pink-50 dark:bg-gray-700 shadow" />
          <input type="date" className="px-3 py-2 rounded-lg bg-pink-50 dark:bg-gray-700 shadow" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {["All", "Planned", "In Progress", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg shadow transition  ${
              filter === status
                ? "bg-pink-500 text-white"
                : "bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* 3. Search */}
      <div>
        <input
          type="text"
          placeholder="🔍 Search project..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 outline-none rounded-lg shadow bg-white dark:bg-gray-700"
        />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Active Projects", value: projects.filter((p) => p.status === "In Progress").length },
          { label: "Completed", value: projects.filter((p) => p.status === "Completed").length },
          { label: "Planned", value: projects.filter((p) => p.status === "Planned").length },
          { label: "Total Projects", value: projects.length },
        ].map((card, i) => (
          <div key={i} className="p-6 rounded-xl shadow bg-green-50 dark:bg-gray-700 hover:scale-105 transition">
            <h2 className="text-sm text-gray-500 dark:text-gray-300">{card.label}</h2>
            <p className="text-3xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>


      <div className="bg-white dark:bg-gray-700 rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Progress Overview</h2>
        <div className="space-y-6">
          {projects.map((p) => (
            <div key={p.id}>
              <p className="font-medium">{p.name}</p>
              <div className="w-full bg-gray-200 dark:bg-gray-800 h-3 rounded-lg overflow-hidden">
                <div className="h-3 bg-pink-600" style={{ width: `${p.progress}%` }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">{p.progress}% complete</p>
            </div>
          ))}
        </div>
      </div>


      <div className="bg-white dark:bg-gray-700 rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Project Task Completion</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-600">
              <th className="py-2">Project</th>
              <th className="py-2">Completed</th>
              <th className="py-2">Pending</th>
              <th className="py-2">Progress</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((p) => {
              const completed = p.tasks.filter((t) => t.done).length;
              const pending = p.tasks.length - completed;
              return (
                <tr key={p.id} className="border-b border-gray-200 dark:border-gray-600">
                  <td className="py-2">{p.name}</td>
                  <td className="py-2">{completed}</td>
                  <td className="py-2">{pending}</td>
                  <td className="py-2">{p.progress}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>


      <div className="bg-white dark:bg-gray-700 rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Top Performers</h2>
        <ul className="space-y-2">
          {projects[0].team.map((m, i) => (
            <li key={i} className="flex justify-between">
              <span>{m.name}</span>
              <span className="text-gray-500 dark:text-gray-300">{m.role}</span>
            </li>
          ))}
        </ul>
      </div>


      <div className="bg-white dark:bg-gray-700 rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Status Distribution</h2>
        <div className="flex gap-4">
          {["Planned", "In Progress", "Completed"].map((status) => (
            <div key={status} className="flex-1 p-4 rounded-lg bg-pink-100 dark:bg-gray-800 text-center">
              <p className="font-bold">{projects.filter((p) => p.status === status).length}</p>
              <p className="text-sm">{status}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="bg-white dark:bg-gray-700 rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Deadlines</h2>
        <ul className="space-y-2">
          {projects
            .filter((p) => p.deadline)
            .slice(0, 5)
            .map((p) => (
              <li key={p.id} className="flex justify-between">
                <span>{p.name}</span>
                <span className="text-sm text-gray-500">{p.deadline}</span>
              </li>
            ))}
        </ul>
      </div>

     
      <div className="flex justify-end">
        <button className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition">
          ⬇ Download Report
        </button>
      </div>

      {/* 11. Activity Feed */}
      <div className="bg-white dark:bg-gray-700 rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Activity Feed</h2>
        <ul className="space-y-2 text-sm">
          <li>✅ Task A completed in Project 1</li>
          <li>🚀 Project 3 moved to In Progress</li>
          <li>👤 New member joined Project 2</li>
        </ul>
      </div>

      {/* 12. Team Stats */}
      <div className="bg-white dark:bg-gray-700 rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Team Stats</h2>
        <ul className="space-y-1">
          {projects.map((p) => (
            <li key={p.id} className="flex justify-between">
              <span>{p.name}</span>
              <span className="text-sm text-gray-500">{p.team.length} members</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 13. Report Notes */}
      <div className="bg-white dark:bg-gray-700 rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Manager Notes</h2>
        <textarea
          rows={4}
          placeholder="Write your notes here..."
          className="w-full p-3 rounded-lg border bg-gray-50 dark:bg-gray-800"
        />
      </div>

      {/* 14. Report Search */}
      <div>
        <input
          type="text"
          placeholder="🔍 Search inside reports..."
          className="w-full px-4 py-2 rounded-lg shadow bg-white dark:bg-gray-700"
        />
      </div>

      {/* 15. Report Footer */}
      <p className="text-sm text-gray-500 text-center">
        Report generated on {new Date().toLocaleString()} • MotionLab Reports
      </p>
    </div>
  );
};

export default Reports;
