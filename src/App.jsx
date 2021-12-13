import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/pages/HomePage";
import Registry from "./components/pages/Registry";
import SingIn from "./components/pages/SingIn";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/registry" element={<Registry/>}/>
            <Route path="/signIn" element={<SingIn/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </div>
  );
}

export default App;
