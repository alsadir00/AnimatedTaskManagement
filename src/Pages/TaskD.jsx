import React from "react";
import { useParams, Link } from "react-router-dom";
import { tasks } from "../Data/tasks";

const TaskD = () => {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === parseInt(id));

  if (!task) {
    return (
      <div className="p-6">
        <p>❌ Task not found</p>
        <Link to="/tasks" className="text-blue-500 underline">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className=" p-6 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">{task.title}</h1>
        <p className="text-gray-700 dark:text-gray-300">{task.description}</p>

        <div className="mt-6 space-y-2">
          <p>
            <span className="font-semibold">Status:</span>{" "}
            <span className="px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700">
              {task.status}
            </span>
          </p>
          <p>
            <span className="font-semibold">Priority:</span> {task.priority}
          </p>
          <p>
            <span className="font-semibold">Due Date:</span> {task.dueDate}
          </p>
          <p>
            <span className="font-semibold">Assignee:</span> {task.assignee}
          </p>
          <div>
            <span className="font-semibold">Tags:</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {task.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 text-right">
          <Link
            to="/tasks"
            className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
          >
            ← Back to Tasks
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskD;

