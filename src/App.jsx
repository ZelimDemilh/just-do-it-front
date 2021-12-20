import React from "react";
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/pages/Homepage";
import Registry from "./components/pages/Registry";
import SingIn from "./components/pages/SingIn";
import Profile from "./components/pages/Profile";
import Footer from "./components/Footer";
import Tasks from "./components/pages/Tasks/Tasks";
import AddTask from "./components/pages/addTask";
import ErrorPage from "./components/pages/ErrorPage";
import Header from "./components/Header";
import TasksCategories from './components/pages/Tasks/categories';
import OneTask from "./components/pages/Tasks/OneTask";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/registry" element={<Registry/>}/>
            <Route path="/signIn" element={<SingIn/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/tasks" element={<Tasks/>}/>
            <Route path="/task/:id" element={<OneTask/>}/>
            <Route path="/addTask" element={<AddTask/>}/>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/tasks/:id" element={<TasksCategories/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
