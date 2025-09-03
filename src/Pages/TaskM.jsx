import React from "react";
import { Link } from "react-router-dom";
import { tasks } from "../Data/tasks";

const statusColors = {
  Todo: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200",
  "In Progress": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200",
  Done: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200",
};

const TaskM = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">📌 Tasks Board</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Todo", "In Progress", "Done"].map((status) => (
          <div
            key={status}
            className="bg-pink-100 dark:bg-gray-800 p-4 rounded-xl shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">{status}</h2>
            <div className="flex flex-col gap-4">
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <Link
                    key={task.id}
                    to={`/tasks/${task.id}`}
                    className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
                  >
                    <h3 className="font-semibold text-lg">{task.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      {task.description}
                    </p>
                    <div className="mt-2 flex justify-between items-center">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${statusColors[task.status]}`}
                      >
                        {task.status}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Due: {task.dueDate}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskM;

