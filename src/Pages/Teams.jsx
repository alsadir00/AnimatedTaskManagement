import React from "react";
import { Link } from "react-router-dom";
import { teamMembers } from "../Data/team";

const Teams = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">👥 Our Teams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <Link
            key={member.id}
            to={`/teams/${member.id}`}
            className="bg-rose-50 dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-200 dark:border-gray-600"
            />
            <h2 className="mt-4 text-xl font-semibold text-center">{member.name}</h2>
            <p className="text-gray-500 dark:text-gray-300 text-center">{member.role}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Teams;

