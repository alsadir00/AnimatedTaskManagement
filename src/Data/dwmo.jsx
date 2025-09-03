import React from "react";

const Portfolio1 = () => {
  const projects = Array.from({ length: 10 }).map((_, idx) => ({
    title: `Project ${idx + 1}`,
    desc: `This project demonstrates advanced techniques and elegant UI design for large-scale applications. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    badges: ["React", "Tailwind", "Node.js"],
    img: `https://picsum.photos/400/250?random=${idx + 1}`,
  }));

  const testimonials = [
    { name: "John Doe", text: "Alsadir is an amazing software engineer. His solutions are practical and elegant.", img: "https://randomuser.me/api/portraits/men/10.jpg" },
    { name: "Jane Smith", text: "Highly professional, creative, and delivers on time. Truly outstanding work.", img: "https://randomuser.me/api/portraits/women/11.jpg" },
    { name: "Mark Taylor", text: "Innovative solutions that make a difference. Alsadir is a problem solver!", img: "https://randomuser.me/api/portraits/men/12.jpg" },
    { name: "Sara Wilson", text: "The portfolio itself shows incredible attention to detail and creativity.", img: "https://randomuser.me/api/portraits/women/13.jpg" },
    { name: "Alex Johnson", text: "Alsadir’s projects are not only functional but visually outstanding.", img: "https://randomuser.me/api/portraits/men/14.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-100 via-pink-200 to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200">
      {/* ---------------- Hero Section ---------------- */}
      <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
        {/* Decorative floating shapes */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-r from-pink-300 to-violet-400 rounded-full opacity-50 blur-3xl z-0 animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-r from-orange-300 to-pink-400 rounded-full opacity-40 blur-3xl z-0 animate-pulse"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-violet-300 to-pink-300 rounded-full opacity-50 blur-2xl rotate-12"></div>

        {/* Profile Info */}
        <div className="relative z-10 flex flex-col items-center md:items-start md:w-1/2 text-center md:text-left">
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="Alsadir Ebrahim"
            className="w-52 h-52 md:w-60 md:h-60 rounded-full border-4 border-violet-500 shadow-xl object-cover mb-6"
          />
          <h1 className="text-6xl font-extrabold mb-2">Alsadir Ebrahim</h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-4">🚀 Software Engineer | Problem Solver | Community Builder</p>
          <p className="text-lg md:text-xl max-w-xl mb-6">
            I build elegant software solutions that solve real-world problems and empower communities.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg shadow-lg transition-all duration-300">
              Hire Me
            </button>
            <button className="px-6 py-3 border border-gray-400 hover:border-gray-600 rounded-lg shadow-lg transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>

        {/* Hero Graphics */}
        <div className="hidden md:flex md:w-1/2 justify-center relative">
          <div className="w-80 h-80 bg-gradient-to-br from-pink-200 to-orange-200 rounded-3xl shadow-2xl rotate-6"></div>
          <div className="w-64 h-64 bg-gradient-to-tr from-violet-300 to-pink-400 rounded-3xl shadow-xl absolute -top-10 -right-10 rotate-12"></div>
        </div>
      </section>

      {/* ---------------- About Me Section ---------------- */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative">
        <h2 className="text-5xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <p className="leading-relaxed text-lg mb-6">
              I am a passionate software engineer, building products that solve real problems.
              My mission is to empower communities through technology and make software that matters.
            </p>
            <p className="leading-relaxed text-lg mb-6">
              Experienced in fullstack development, I focus on creating elegant interfaces, scalable backend systems, and seamless user experiences.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center mt-6">
              <div className="bg-gradient-to-r from-violet-200 to-pink-200 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">10+</h3>
                <p>Projects</p>
              </div>
              <div className="bg-gradient-to-r from-pink-200 to-orange-200 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="bg-gradient-to-r from-orange-200 to-violet-200 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">20+</h3>
                <p>Clients</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute w-64 h-64 bg-gradient-to-r from-violet-300 to-pink-400 rounded-full -top-10 -left-10 opacity-40 blur-2xl animate-pulse"></div>
            <div className="absolute w-48 h-48 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full -bottom-8 -right-12 opacity-50 blur-xl animate-pulse"></div>
            <img
              src="https://randomuser.me/api/portraits/men/46.jpg"
              alt="About me"
              className="relative w-full h-96 rounded-3xl shadow-2xl object-cover border-4 border-white dark:border-gray-700"
            />
          </div>
        </div>
      </section>

      {/* ---------------- Skills Section ---------------- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Frontend */}
          <div className="bg-gradient-to-tr from-violet-200 via-pink-200 to-orange-200 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold mb-6">Frontend</h3>
            {["React", "TailwindCSS", "Responsive Design", "HTML5", "CSS3"].map((skill, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{skill}</span>
                  <span>{80 + i * 4}%</span>
                </div>
                <div className="w-full h-3 bg-gray-300 rounded-full dark:bg-gray-600">
                  <div className={`h-3 bg-violet-500 rounded-full w-[${80 + i * 4}%]`}></div>
                </div>
              </div>
            ))}
          </div>
          {/* Backend */}
          <div className="bg-gradient-to-tr from-pink-200 via-orange-200 to-violet-200 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold mb-6">Backend</h3>
            {["Node.js", "Express", "MongoDB", "REST API", "GraphQL"].map((skill, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{skill}</span>
                  <span>{75 + i * 5}%</span>
                </div>
                <div className="w-full h-3 bg-gray-300 rounded-full dark:bg-gray-600">
                  <div className={`h-3 bg-pink-500 rounded-full w-[${75 + i * 5}%]`}></div>
                </div>
              </div>
            ))}
          </div>
          {/* DevOps */}
          <div className="bg-gradient-to-tr from-orange-200 via-violet-200 to-pink-200 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-semibold mb-6">DevOps & Tools</h3>
            {["CI/CD", "Docker", "Kubernetes", "GitHub Actions", "Linux"].map((skill, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{skill}</span>
                  <span>{70 + i * 5}%</span>
                </div>
                <div className="w-full h-3 bg-gray-300 rounded-full dark:bg-gray-600">
                  <div className={`h-3 bg-orange-500 rounded-full w-[${70 + i * 5}%]`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Experience Timeline ---------------- */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative">
        <h2 className="text-5xl font-bold text-center mb-12">Experience & Achievements</h2>
        <div className="relative border-l-4 border-violet-500 dark:border-pink-400 pl-10 space-y-12">
          {[
            { year: "2022", title: "Fullstack Projects", desc: "Built 10+ fullstack apps with modern tech stacks." },
            { year: "2021", title: "Community Contributions", desc: "Mentored and collaborated in open-source projects." },
            { year: "2020", title: "CI/CD & DevOps", desc: "Implemented pipelines and infrastructure for multiple projects." },
            { year: "2019", title: "Early Projects", desc: "Built small applications to strengthen fundamentals." },
            { year: "2018", title: "Learning & Growth", desc: "Focused on mastering React, Node, and TailwindCSS." },
            { year: "2017", title: "First Projects", desc: "Started building web apps and exploring UI/UX design." },
          ].map((item, idx) => (
            <div key={idx} className={`relative bg-gradient-to-r from-violet-100 via-pink-200 to-orange-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 p-6 rounded-xl shadow-lg ${idx % 2 === 0 ? "ml-10" : "mr-10"}`}>
              <div className="absolute -left-6 top-6 w-6 h-6 rounded-full bg-violet-500 dark:bg-pink-400 shadow-lg"></div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <span className="text-gray-600 dark:text-gray-300">{item.year}</span>
              <p className="mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Projects Showcase ---------------- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, idx) => (
            <div key={idx} className="relative bg-gradient-to-tr from-pink-200 via-orange-200 to-violet-200 dark:from-gray-700 dark:to-gray-800 p-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300">
              <img src={proj.img} alt={proj.title} className="rounded-xl mb-4 w-full h-48 object-cover shadow-lg" />
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{proj.desc}</p>
              <div className="flex gap-2 flex-wrap mb-4">
                {proj.badges.map((b, i) => (
                  <span key={i} className="px-3 py-1 bg-violet-500 text-white rounded-full text-sm">{b}</span>
                ))}
              </div>
              <a href="#" className="inline-block text-violet-700 dark:text-violet-400 font-semibold hover:underline">View Project →</a>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Testimonials ---------------- */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-r from-orange-100 via-pink-100 to-violet-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl shadow-xl">
        <h2 className="text-5xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-6 bg-gradient-to-br from-violet-200 via-pink-200 to-orange-200 dark:from-gray-700 dark:to-gray-800 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 relative">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div className="mt-16 text-center">
                <p className="italic mb-4">"{t.text}"</p>
                <h4 className="font-bold">{t.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Awards Section ---------------- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center mb-12">Awards & Achievements</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="bg-gradient-to-tr from-pink-200 via-orange-200 to-violet-200 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-6 shadow-xl hover:scale-105 transition-transform duration-300 text-center">
              <h3 className="text-xl font-semibold mb-2">Award {idx + 1}</h3>
              <p className="text-gray-700 dark:text-gray-300">Recognized for outstanding contribution in development, design, and innovation.</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Fun Facts / Stats ---------------- */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-r from-pink-100 via-violet-100 to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-3xl shadow-xl">
        <h2 className="text-5xl font-bold text-center mb-12">Fun Facts</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Projects Completed", value: 120 },
            { label: "Happy Clients", value: 25 },
            { label: "Years Experience", value: 5 },
            { label: "Coffee Cups", value: 999 },
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-gradient-to-tr from-violet-200 via-pink-200 to-orange-200 dark:from-gray-700 dark:to-gray-800 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-2">{item.value}+</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Contact Section ---------------- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center mb-12">Contact Me</h2>
        <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Your Name" className="p-4 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500" />
          <input type="email" placeholder="Your Email" className="p-4 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500" />
          <textarea placeholder="Your Message" className="md:col-span-2 p-4 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 h-40"></textarea>
          <button className="md:col-span-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg shadow-lg transition-all duration-300">Send Message</button>
        </form>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="mt-16 bg-gradient-to-r from-violet-200 via-pink-200 to-orange-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-pink-300 to-violet-400 rounded-full opacity-40 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-orange-300 to-pink-400 rounded-full opacity-40 blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className="mb-4">© 2025 Alsadir Ebrahim | Software Engineer | All Rights Reserved</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-violet-700 dark:hover:text-violet-400">GitHub</a>
            <a href="#" className="hover:text-pink-700 dark:hover:text-pink-400">LinkedIn</a>
            <a href="#" className="hover:text-orange-700 dark:hover:text-orange-400">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};









import React from "react";

const Portfolio2 = () => {
  return (
    <div className="bg-gradient-to-r from-violet-100 via-pink-100 to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-gray-100 overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        {/* Background magic shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>

        {/* Profile Image */}
        <img
          src="https://picsum.photos/300/300"
          alt="Profile"
          className="rounded-full w-40 h-40 object-cover border-4 border-white dark:border-gray-700 shadow-2xl mb-6"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-transparent bg-clip-text animate-bounce">
          Alsadir Ebrahim
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light max-w-2xl">
          🚀 Software Engineer | Problem Solver | Builder of Elegant & Scalable
          Systems
        </p>
        <div className="flex gap-4 mt-6">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg hover:scale-105 transition">
            Download CV
          </button>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-lg hover:scale-105 transition">
            Hire Me
          </button>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="relative py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://picsum.photos/500/400"
            alt="About"
            className="rounded-2xl shadow-lg"
          />
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Hi, I’m <strong>Alsadir Ebrahim</strong>, a passionate software
              engineer who thrives on building impactful solutions. With a track
              record of solving complex problems and shipping full-stack
              projects, I bring creativity, precision, and resilience to every
              project.
            </p>
            <p>
              My philosophy: <em>"Tech is not about code, it’s about making
              people’s lives easier."</em>
            </p>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-purple-100 dark:bg-gray-800 rounded-xl shadow">
                🌍 Ethiopia
              </span>
              <span className="px-4 py-2 bg-pink-100 dark:bg-gray-800 rounded-xl shadow">
                💻 Fullstack Developer
              </span>
              <span className="px-4 py-2 bg-orange-100 dark:bg-gray-800 rounded-xl shadow">
                🎯 Problem Solver
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section className="relative py-20 px-6 md:px-20 bg-white dark:bg-gray-900 rounded-t-3xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {[
            { skill: "React & Frontend Engineering", level: "95%" },
            { skill: "Node.js & Backend APIs", level: "90%" },
            { skill: "MongoDB & Database Design", level: "85%" },
            { skill: "CI/CD & DevOps", level: "80%" },
            { skill: "Animations & Motion Design", level: "88%" },
            { skill: "UI/UX Design with TailwindCSS", level: "92%" },
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <p className="font-semibold">{item.skill}</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                  style={{ width: item.level }}
                ></div>
              </div>
              <span className="text-sm opacity-70">{item.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="relative py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">Timeline</h2>
        <div className="relative border-l-4 border-purple-500 dark:border-pink-500 max-w-4xl mx-auto">
          {[
            {
              year: "2020",
              title: "Started Learning Programming",
              desc: "Began with Python and Web Development fundamentals.",
            },
            {
              year: "2021",
              title: "First Freelance Project",
              desc: "Delivered an eCommerce website for a local store.",
            },
            {
              year: "2022",
              title: "Fullstack Developer",
              desc: "Built 10+ projects, mastering React, Node, and MongoDB.",
            },
            {
              year: "2023",
              title: "Open Source Contributions",
              desc: "Contributed to community projects and mentored juniors.",
            },
            {
              year: "2024",
              title: "Senior Engineer",
              desc: "Leading projects and solving real-world problems.",
            },
          ].map((item, i) => (
            <div key={i} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-500 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900"></span>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <time className="block mb-2 text-sm text-gray-500">
                {item.year}
              </time>
              <p className="mb-4 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-lg bg-white dark:bg-gray-900 overflow-hidden group hover:scale-105 transition"
            >
              <img
                src={`https://picsum.photos/500/30${i}`}
                alt={`Project ${i}`}
                className="w-full h-40 object-cover group-hover:opacity-80"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project {i + 1}</h3>
                <p className="text-sm opacity-80 mb-4">
                  A modern project showcasing my skills in React, TailwindCSS,
                  and animation.
                </p>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== AWARDS ===== */}
      <section className="relative py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">Awards</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Best Developer Award 2022",
            "UI/UX Design Hackathon Winner",
            "Top 1% GitHub Contributor",
          ].map((award, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-lg font-semibold mb-2">{award}</h3>
              <p className="text-sm opacity-70">
                Recognition of excellence in development and design.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative py-20 px-6 md:px-20 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "John Doe",
              role: "CTO, TechCorp",
              feedback:
                "Alsadir is a brilliant engineer. He doesn’t just code — he solves problems elegantly.",
            },
            {
              name: "Sarah Smith",
              role: "Product Manager, InnovateX",
              feedback:
                "Working with Alsadir was a game-changer. His designs and systems exceeded expectations.",
            },
            {
              name: "Michael Johnson",
              role: "CEO, StartupHub",
              feedback:
                "He built our MVP in record time, with outstanding quality. Highly recommend him!",
            },
          ].map((test, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <p className="mb-4">“{test.feedback}”</p>
              <h4 className="font-semibold">{test.name}</h4>
              <span className="text-sm opacity-70">{test.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FUN FACTS ===== */}
      <section className="relative py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">Fun Facts</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {[
            { label: "Projects Completed", value: "50+" },
            { label: "Cups of Coffee", value: "2000+" },
            { label: "Hours Coding", value: "10,000+" },
            { label: "Happy Clients", value: "30+" },
          ].map((fact, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-lg"
            >
              <h3 className="text-3xl font-bold">{fact.value}</h3>
              <p>{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="relative py-20 px-6 md:px-20 bg-gradient-to-r from-pink-100 via-purple-100 to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <form className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          ></textarea>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl shadow-lg hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-10 text-center bg-white dark:bg-gray-900 border-t dark:border-gray-700">
        <p>
          © {new Date().getFullYear()} Alsadir Ebrahim. Built with ❤️ using
          React + TailwindCSS.
        </p>
      </footer>
    </div>
  );
};




import React, { useEffect, useRef } from "react";

/**
 * Portfolio.jsx
 * - Keeps your hero exactly as-is
 * - Upgrades all other sections with animations, blur blobs, sticky/stacked cards,
 *   mobile snap-scrolling, scroll-reveal effects, animated skill bars, and subtle microinteractions.
 *
 * Usage: import Portfolio from './Portfolio' and use it as a route.
 */

const Portfolio3 = () => {
  const rootRef = useRef(null);

  // Scroll reveal: add .is-revealed when an element with data-reveal becomes visible
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof window === "undefined") return;

    const items = el.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            // optionally unobserve to reveal only once:
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((i) => observer.observe(i));

    return () => observer.disconnect();
  }, []);

  // Small dataset for projects/testimonials to show more cards
  const projects = Array.from({ length: 9 }).map((_, idx) => ({
    id: idx + 1,
    title: `Project ${idx + 1}`,
    short: "Elegant UI, performant frontend, thoughtful UX and robust backend.",
    img: `https://picsum.photos/800/500?random=${idx + 10}`,
    badges: ["React", "Tailwind", idx % 2 ? "Node.js" : "Design"],
  }));

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CTO, TechCorp",
      text: "Alsadir doesn't just deliver code — he crafts solutions that scale and delight users.",
      img: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Product Manager",
      text: "We shipped faster and with fewer bugs thanks to Alsadir's architecture and attention to detail.",
      img: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "CEO, StartupHub",
      text: "From idea to MVP, Alsadir made the experience frictionless and productive.",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];

  return (
    <div ref={rootRef} className="bg-gradient-to-r from-violet-100 via-pink-100 to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-gray-100 overflow-x-hidden">
      {/* small CSS additions for animations not present in pure Tailwind */}
      <style>{`
        /* custom helpers */
        .animate-pulse-slow { animation: pulse 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        .animate-bounce-slow { animation: bounce 6s ease-in-out infinite; }

        @keyframes spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        @keyframes pulse { 0%{opacity:.55}50%{opacity:.95}100%{opacity:.55} }
        @keyframes bounce { 0%{transform: translateY(0)}50%{transform: translateY(-10px)}100%{transform: translateY(0)} }

        /* reveal animation */
        [data-reveal] { opacity: 0; transform: translateY(24px) scale(0.99); transition: all 700ms cubic-bezier(.2,.9,.2,1); }
        [data-reveal].is-revealed { opacity: 1; transform: none; }

        /* animated skill bar grow (fallback) */
        .bar-grow { transition: width 1200ms cubic-bezier(.2,.9,.2,1); }

        /* faint glass border glow */
        .glass-glow { box-shadow: 0 10px 30px rgba(139,92,246,0.12); border: 1px solid rgba(255,255,255,0.06); backdrop-filter: blur(6px); }

        /* mobile stacked visual (slightly overlapping) */
        .stacked-mobile > * { margin-bottom: -48px; } /* negative margin to overlap cards visually on small screens */

        /* horizontal snap styling for projects on mobile */
        .snap-row { scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; overflow-x: auto; display: flex; gap: 1rem; padding-bottom: 1rem;}
        .snap-item { scroll-snap-align: center; flex: 0 0 84%; max-width: 84%; }

        /* subtle neon on CTA */
        .neon-cta { box-shadow: 0 6px 30px rgba(139,92,246,0.18), 0 0 18px rgba(99,102,241,0.12) inset; }
      `}</style>

      {/* ===== HERO SECTION (unchanged, kept outstanding) ===== */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>

        <img
          src="https://picsum.photos/300/300"
          alt="Profile"
          className="rounded-full w-40 h-40 object-cover border-4 border-white dark:border-gray-700 shadow-2xl mb-6"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-transparent bg-clip-text animate-bounce">
          Alsadir Ebrahim
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light max-w-2xl">
          🚀 Software Engineer | Problem Solver | Builder of Elegant & Scalable
          Systems
        </p>
        <div className="flex gap-4 mt-6">
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg hover:scale-105 transition neon-cta"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-lg hover:scale-105 transition neon-cta"
          >
            Hire Me
          </a>
        </div>
      </section>

      {/* ===== ABOUT SECTION (fancier: morph blobs, glass card with reveal) ===== */}
      <section className="relative py-20 px-6 md:px-20">
        {/* decorative morph blobs */}
        <div className="absolute -left-20 top-10 w-72 h-72 bg-pink-300 opacity-30 rounded-full blur-3xl mix-blend-multiply animate-pulse-slow"></div>
        <div className="absolute right-10 -bottom-16 w-80 h-80 bg-orange-300 opacity-25 rounded-full blur-3xl mix-blend-multiply animate-spin-slow"></div>

        <h2 className="text-4xl font-bold text-center mb-12" data-reveal>
          About Me
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div data-reveal className="relative">
            <div className="absolute -left-6 -top-6 w-40 h-40 bg-gradient-to-tr from-violet-300 to-pink-300 rounded-full opacity-40 blur-xl animate-pulse-slow"></div>
            <img src="https://picsum.photos/500/420" alt="About" className="rounded-3xl shadow-2xl transform hover:scale-105 transition" />
          </div>

          <div data-reveal className="space-y-6">
            <div className="glass-glow p-6 rounded-2xl">
              <p className="text-lg leading-relaxed">
                Hi, I’m <strong>Alsadir Ebrahim</strong>. I build elegant software
                solutions that solve measurable problems. I design with humans in mind —
                fast, accessible, and delightful.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-200 to-pink-200 shadow-lg flex flex-col items-center" data-reveal>
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm opacity-80">Projects</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-r from-pink-200 to-orange-200 shadow-lg flex flex-col items-center" data-reveal>
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm opacity-80">Years</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-r from-orange-200 to-violet-200 shadow-lg flex flex-col items-center" data-reveal>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm opacity-80">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION (animated bars + floating badges + reveal) ===== */}
      <section className="relative py-20 px-6 md:px-20 bg-white dark:bg-gray-900 rounded-t-3xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-12" data-reveal>Skills</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Skill group */}
          <div data-reveal className="space-y-6 p-6 rounded-2xl glass-glow">
            <h3 className="text-2xl font-semibold mb-2">Frontend & Animation</h3>
            {[
              { name: "React", pct: 95 },
              { name: "Tailwind & CSS", pct: 92 },
              { name: "Motion UI", pct: 88 },
            ].map((s, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{s.name}</span>
                  <span className="opacity-70">{s.pct}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="bar-grow bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                    style={{ width: `${s.pct}%`, transitionDelay: `${i * 120}ms` }} />
                </div>
              </div>
            ))}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-50 rounded-full text-sm">JSX</span>
              <span className="px-3 py-1 bg-pink-50 rounded-full text-sm">ARIA</span>
              <span className="px-3 py-1 bg-orange-50 rounded-full text-sm">SVG</span>
            </div>
          </div>

          {/* Backend group */}
          <div data-reveal className="space-y-6 p-6 rounded-2xl glass-glow">
            <h3 className="text-2xl font-semibold mb-2">Backend & Systems</h3>
            {[
              { name: "Node.js", pct: 90 },
              { name: "Express / APIs", pct: 88 },
              { name: "DB Design", pct: 85 },
            ].map((s, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{s.name}</span>
                  <span className="opacity-70">{s.pct}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="bar-grow bg-gradient-to-r from-pink-500 to-orange-500 h-3 rounded-full"
                    style={{ width: `${s.pct}%`, transitionDelay: `${i * 120}ms` }} />
                </div>
              </div>
            ))}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-50 rounded-full text-sm">REST</span>
              <span className="px-3 py-1 bg-pink-50 rounded-full text-sm">Auth</span>
              <span className="px-3 py-1 bg-orange-50 rounded-full text-sm">Scaling</span>
            </div>
          </div>

          {/* DevOps group */}
          <div data-reveal className="space-y-6 p-6 rounded-2xl glass-glow">
            <h3 className="text-2xl font-semibold mb-2">DevOps & Tools</h3>
            {[
              { name: "CI/CD", pct: 85 },
              { name: "Docker", pct: 82 },
              { name: "Monitoring", pct: 78 },
            ].map((s, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{s.name}</span>
                  <span className="opacity-70">{s.pct}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="bar-grow bg-gradient-to-r from-orange-500 to-violet-500 h-3 rounded-full"
                    style={{ width: `${s.pct}%`, transitionDelay: `${i * 120}ms` }} />
                </div>
              </div>
            ))}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-50 rounded-full text-sm">Docker</span>
              <span className="px-3 py-1 bg-pink-50 rounded-full text-sm">AW S</span>
              <span className="px-3 py-1 bg-orange-50 rounded-full text-sm">CI</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION (desktop grid + mobile snap & stacked feel) ===== */}
      <section className="relative py-20 px-6 md:px-20" id="projects">
        <h2 className="text-4xl font-bold text-center mb-12" data-reveal>Projects</h2>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-7xl mx-auto" data-reveal>
          {projects.map((p) => (
            <article key={p.id} className="rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition duration-400 bg-white dark:bg-gray-800">
              <div className="relative h-44 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm opacity-75 mb-4">{p.short}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {p.badges.map((b, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs bg-violet-100 dark:bg-violet-700">{b}</span>
                  ))}
                </div>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:scale-105 transition neon-cta">View Project</button>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile horizontal snap + stacked look */}
        <div className="md:hidden mt-6 snap-row px-4">
          {projects.map((p) => (
            <article key={p.id} className="snap-item rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800 p-4">
              <div className="h-40 overflow-hidden rounded-xl mb-3">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold mb-1">{p.title}</h3>
              <p className="text-sm opacity-75 mb-3">{p.short}</p>
              <div className="flex gap-2 flex-wrap mb-3">
                {p.badges.map((b,i)=> <span key={i} className="text-xs px-2 py-1 bg-purple-50 rounded-full">{b}</span>)}
              </div>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-full w-full">View</button>
            </article>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS (sticky stack on large screens & mobile stacked cards) ===== */}
      <section className="relative py-20 px-6 md:px-20 bg-gradient-to-r from-orange-100 via-pink-100 to-violet-100 dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <h2 className="text-4xl font-bold text-center mb-12" data-reveal>Testimonials</h2>

        {/* Desktop: three sticky stacked cards */}
        <div className="hidden md:flex max-w-6xl mx-auto gap-8">
          {testimonials.map((t, i) => (
            <div key={t.id} className="sticky top-36 bg-white/60 dark:bg-black/40 backdrop-blur-lg rounded-2xl p-6 shadow-xl transform hover:-translate-y-2 transition" data-reveal>
              <div className="flex items-center gap-4 mb-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs opacity-70">{t.role}</div>
                </div>
              </div>
              <p className="italic">“{t.text}”</p>
              <div className="mt-4 text-right">
                <span className="text-xs opacity-60">Verified Client</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile stacked/overlapping list for tactile scrolling */}
        <div className="md:hidden max-w-md mx-auto mt-6 stacked-mobile">
          {testimonials.map((t, idx) => (
            <div key={t.id} className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg mb-10 transform hover:scale-105 transition" data-reveal>
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs opacity-70">{t.role}</div>
                </div>
              </div>
              <p className="mt-3 italic text-sm">"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== AWARDS (animated card grid) ===== */}
      <section className="relative py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12" data-reveal>Awards & Recognition</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: "Best Developer 2022", desc: "Recognized for product excellence."},
            { title: "UI/UX Hack Winner", desc: "Design & usability award."},
            { title: "Open Source Contributor", desc: "Top contributors list."},
          ].map((a, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-glow hover:scale-105 transition" data-reveal>
              <h4 className="font-semibold text-lg mb-1">{a.title}</h4>
              <p className="text-sm opacity-80">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FUN FACTS (animated counters feel) ===== */}
      <section className="relative py-20 px-6 md:px-20 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 rounded-t-3xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-12" data-reveal>Fun Facts</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Projects", value: 120 },
            { label: "Clients", value: 30 },
            { label: "Hours", value: 10000 },
            { label: "Coffee", value: 2000 },
          ].map((f, i) => (
            <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg" data-reveal>
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">{f.value}+</div>
              <div className="mt-2 text-sm opacity-70">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT (floating cards & CTA) ===== */}
      <section id="contact" className="relative py-20 px-6 md:px-20">
        <div className="absolute left-6 top-6 w-44 h-44 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-30 blur-3xl"></div>
        <h2 className="text-4xl font-bold text-center mb-12" data-reveal>Contact Me</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <form className="bg-white/20 dark:bg-black/30 backdrop-blur-lg p-6 rounded-2xl shadow-xl space-y-4" data-reveal>
            <input className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700" placeholder="Your name" />
            <input className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700" placeholder="Your email" />
            <textarea className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700" rows="5" placeholder="Message" />
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white neon-cta">Send Message</button>
              <button className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700">Schedule Call</button>
            </div>
          </form>

          <div className="space-y-6" data-reveal>
            <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-lg glass-glow">
              <h4 className="font-semibold">Why work with me?</h4>
              <ul className="mt-3 list-disc list-inside text-sm opacity-90">
                <li>Problem-first approach</li>
                <li>High-quality, maintainable code</li>
                <li>Fast iterations & dependable delivery</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-lg">
              <h4 className="font-semibold">Contact</h4>
              <p className="text-sm opacity-80 mt-2">alsadir@example.com</p>
              <p className="text-sm opacity-80">+251 9xx xxx xxx</p>
              <div className="flex gap-3 mt-4">
                <a className="px-3 py-2 rounded-lg bg-violet-600 text-white" href="#">GitHub</a>
                <a className="px-3 py-2 rounded-lg bg-pink-600 text-white" href="#">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-10 text-center bg-white dark:bg-gray-900 border-t dark:border-gray-700">
        <p>© {new Date().getFullYear()} Alsadir Ebrahim — crafted with ❤️ using React + TailwindCSS</p>
      </footer>
    </div>
  );
};




