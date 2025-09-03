import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer className="px-6 md:px-16 dark:text-gray-100 lg:px-24 xl:px-32 mt-40 w-full text-slate-600">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 pb-6">
                <div className="md:max-w-114">
                    <Link
                        to="/"
                        className="text-2xl font-extrabold tracking-wide bg-white dark:bg-gray-800 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 px-3 py-1 rounded-lg hover:scale-105 transform transition"
                        >
                        Motmaker
                    </Link>
                    <p className="mt-6">
                        Launch your SaaS product in record time with our all-in-one platform designed for speed, flexibility, growth and managing any kinds of projects. Whether you&apos;re a solo Person or a fast-moving team, we provide everything you need.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800 dark:text-gray-100">Company</h2>
                        <ul className="flex flex-col space-y-2">
                            <Link to="/" className="hover:text-pink-300 transition">Home</Link>
                            <Link to="/projects" className="hover:text-pink-300 transition">Projects</Link>
                            <Link to="/reports" className="hover:text-pink-300 transition">Reports</Link>
                            <Link to="/teams" className="hover:text-pink-300 transition">Teams</Link>
                            <Link to="/tasks" className="hover:text-pink-300 transition">Tasks</Link>
                            <Link to="/settings" className="hover:text-pink-300 transition">Settings</Link>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800 dark:text-gray-100">Get in touch</h2>
                        <div className="space-y-2">
                            <p>+251-918-180-038</p>
                            <p>alsadir00@gmail.com</p>
                            <p>+251-901-858-932</p>
                            <p>kreamsr7@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center pb-5">
                Copyright 2024 © <a href="#">Motmaker</a>. All Right Reserved.
            </p>
        </footer>
    );
};