import React from "react";
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/pages/Homepage";
import Registry from "./components/pages/Registry";
import SingIn from "./components/pages/SingIn";
import Profile from "./components/pages/Profile";
import Footer from "./components/Footer";
import Tasks from "./components/pages/Tasks";
import AddTask from "./components/pages/addTask";
import ErrorPage from "./components/pages/ErrorPage";
import Header from "./components/Header";

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
            <Route path="/addTask" element={<AddTask/>}/>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
