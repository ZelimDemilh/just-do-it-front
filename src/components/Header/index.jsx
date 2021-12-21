import React from "react"
import { NavLink } from "react-router-dom"
import cl from "./Header.module.css"
import { useDispatch, useSelector } from "react-redux"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import { Button } from "@mui/material"
import { signOut } from "../../store/signInSlice"

const Header = () => {
  const { token } = useSelector((state) => state.signIn)

  const dispatch = useDispatch()

  const handleExit = () => dispatch(signOut())

  return (
    <div className="container ">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <NavLink
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <NavLink to="/" className={`fs-3 fw-bold ${cl.color}`}>
            Just-Do-It
          </NavLink>
        </NavLink>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink
              to="/tasks"
              className={`nav-link px-2 link-dark ${cl.color}`}
            >
              Найти задание
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addTask"
              className={`nav-link px-2 link-dark ${cl.color}`}
            >
              Создать задание
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className={`nav-link px-2 link-dark ${cl.color}`}>
              О нас
            </NavLink>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <NavLink
            to={token ? "/profile" : "/signIn"}
            type="button"
            className="btn btn-outline-danger me-2 "
          >
            {token ? "Профиль" : "Войти"}
          </NavLink>
          {token ? (
            <Button onClick={handleExit} color="error">
              <ExitToAppIcon />
            </Button>
          ) : null}

          {/*<NavLink to="/registry" type="button" className="btn btn-outline-danger me-2 ">*/}
          {/*        Зарегистрироваться*/}
          {/*</NavLink>*/}
        </div>
      </header>
    </div>
  )
}

export default Header
