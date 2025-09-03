import { Link } from "react-router-dom";
import { projects } from "../Data/project.js";

const Projects = () => {
  return (
    <div className="p-6  dark:bg-gray-800 min-h-screen flex flex-col gap-3">
      <div className="flex items-center justify-center">
        <h1 className="text-center px-10 py-2 rounded-full bg-pink-300 text-orange-600 font-bold shadow-lg">Projects</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-pink-200 dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              {project.name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
              {project.description}
            </p>
            <div className="mt-3">
              <span
                className={`px-2 py-1 text-xs rounded ${
                  project.status === "In Progress"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {project.status}
              </span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Progress: {project.progress}%
              </p>
              <Link
                to={`/projects/${project.id}`}
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

