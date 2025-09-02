import React from 'react'
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


import Home from './Pages/Home';
import Reports from './Pages/Reports'
import Navbar from './Components/Navbar';
import { ThemeProvider } from './Contexts/ThemeContext';
import TeamsD from './Pages/TeamsD';
import Teams from './Pages/Teams';
import Settings from './Pages/Settings';
import Login from './Pages/Login'
import Projects from './Pages/Projects'
import ProjectsD from './Pages/ProjectD'
import TaskD from './Pages/TaskD'
import TaskM from './Pages/TaskM';


const App = () => {
  return (
    <ThemeProvider>
      <div className='h-screen w-screen dark:bg-gradient-to-tr dark:from-gray-700 dark:via-gray-600 dark:text-pink-200 dark:to-gray-800 bg-gradient-to-r from-violet-100 via-pink-200 to-orange-100'>
        <Router>
          <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
          />
          <div className='w-screen h-18'>
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/login" element={<Login />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:id" element={<TeamsD />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectsD />} />
            <Route path="/tasks/:id" element={<TaskD />} />
            <Route path="/tasks" element={<TaskM />} />
          </Routes>
      </Router>
    </div>
    </ThemeProvider>

  )
}

export default App
