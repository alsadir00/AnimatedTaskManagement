import React from "react";
import SectionTitle from "./SectionTitle";
const ProjectCard = ({ name, progress, members,index }) => {
  return (

    <div className={`${index % 2 === 0 ? "rotate-5" : "-rotate-5"} mb-4  bg-pink-100 dark:bg-gray-600 h-100 shadow p-6 rounded-lg flex flex-col`}>
      <div className="">
        <img src="/project.png" alt="Deme Project"  className="w-full h-40 object-cover rounded-t-md"/>
      </div>
      <div className="bg-pink-200 dark:bg-gray-800 h-full shadow p-6 rounded-b-xl">
        <h3 className="font-bold  text-lg mb-2">{name}</h3>
        <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mb-2">
          <div
            className="bg-rose-200 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex space-x-2 mt-2">
          {members.map((m, idx) => (
            <div
              key={idx}
              className=" px-2 py-1 flex items-center justify-center rounded-lg bg-gray-400 dark:bg-gray-600 text-white text-sm font-light"
            >
              {m}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const Projects = () => {
  const projects = [
    {
      name: "E-Commerce Platform",
      progress: 80,
      members: ["Alice", "Bob", "Charlie"],
    },
    { name: "AI Chatbot", progress: 60, members: ["David", "Eve", "Frank"] },
    {
      name: "Mobile Banking App",
      progress: 45,
      members: ["Grace", "Hank", "Ivy"],
    },
    {
      name: "Learning Management System",
      progress: 90,
      members: ["Jack", "Kara", "Leo"],
    },
    {
      name: "Social Media Dashboard",
      progress: 70,
      members: ["Mona", "Nate", "Oscar"],
    },
    {
      name: "Healthcare Tracker",
      progress: 35,
      members: ["Paul", "Quinn", "Rita"],
    },
  ];
  return (
    <div className="flex flex-col gap-2">
     <SectionTitle text1={"Recent Projects"} text2={"Our wor speaks loud! See our ongoing projects"} text3={"Ship Beautiful Frontends Without the Overhead — Customizable, Scalable, and Developer-Friendly UI Components."}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            name={project.name}
            progress={project.progress}
            members={project.members}
          />
        ))}
      </div>
    </div>
  );
};
export default Projects;
