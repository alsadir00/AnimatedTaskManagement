import { useParams, Link } from "react-router-dom";
import { projects } from "../Data/project.js";


const ProjectD = () => {





  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Project not found</h2>
        <Link to="/projects" className="text-blue-500 border px-5 py-1">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="p-6  dark:bg-gray-900 ">
      <Link to="/projects" className="text-blue-500 border px-5 py-2 rounded-md">← Back to Projects</Link>
      <h1 className="text-3xl font-bold mt-4 text-gray-800 dark:text-white">
        {project.name}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        {project.description}
      </p>

      {/* Progress */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg text-gray-700 dark:text-white">
          Progress
        </h3>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mt-2">
          <div
            className="bg-green-500 h-3 rounded-full"
            style={{ width: `${project.progress}%` }}
          />
        </div>
        <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
          {project.progress}% Complete
        </p>
      </div>

      {/* Team */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg text-gray-700 dark:text-white">
          Team Members
        </h3>
        <ul className="mt-2 space-y-2">
          {project.team.map((member) => (
            <li key={member.id} className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center">
                {member.name[0]}
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {member.name} – {member.role}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Tasks */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg text-gray-700 dark:text-white">
          Tasks
        </h3>
        <ul className="mt-2 space-y-2">
          {project.tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
            >
              <input type="checkbox" checked={task.done} readOnly />
              <span className={task.done ? "line-through " : ""}>
                {task.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Updates */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg text-gray-700 dark:text-white">
          Updates
        </h3>
        <ul className="mt-2 space-y-2">
          {project.updates.map((update) => (
            <li
              key={update.id}
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              <span className="font-medium">{update.date}:</span> {update.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectD;

