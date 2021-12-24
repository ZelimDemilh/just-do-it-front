import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/pages/Homepage"
import Registry from "./components/pages/Registry"
import SingIn from "./components/pages/SingIn"
import Profile from "./components/pages/Profile"
import Tasks from "./components/pages/Tasks/Tasks"
import AddTask from "./components/pages/addTask"
import ErrorPage from "./components/pages/ErrorPage"
import TasksCategories from "./components/pages/Tasks/categories"
import OneTask from "./components/pages/Tasks/OneTask"
import Layout from "./components/Layout"
import Auth from "./hoc/Auth"
import MyTasks from "./components/pages/myTasks"
import Candidates from "./components/pages/candidates";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="registry" element={<Registry />} />
          <Route path="signIn" element={<SingIn />} />
          <Route path="profile" element={<Profile />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="my-tasks" element={<MyTasks />} />
          <Route path="tasks/:id" element={<OneTask/>} />
          <Route path=":id/candidates" element={<Candidates/>} />
          <Route
            path="addTask"
            element={
              <Auth>
                <AddTask />
              </Auth>
            }
          />
          <Route path="tasks/category/:id" element={<TasksCategories />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
