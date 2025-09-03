import React from "react";
import { useParams, Link } from "react-router-dom";
import { teamMembers } from "../Data/team";

const TeamD = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === parseInt(id));

  if (!member) {
    return (
      <div className="p-6">
        <p>❌ Member not found</p>
        <Link to="/teams" className="text-blue-500 underline">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className=" p-6 bg-gradient-to-br from-pink-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl mx-auto bg-rose-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 dark:border-gray-600"
          />
          <div>
            <h1 className="text-3xl font-bold">{member.name}</h1>
            <p className="text-gray-500 dark:text-gray-300">{member.role}</p>
            <p className="mt-2">📧 {member.email}</p>
            <p>📞 {member.phone}</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {member.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-700 font-bold dark:text-blue-200 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Projects</h2>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            {member.projects.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 text-right">
          <Link
            to="/teams"
            className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
          >
            ← Back to Teams
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamD;

