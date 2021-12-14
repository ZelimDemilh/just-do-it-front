import React from 'react';
import {NavLink} from "react-router-dom"
const Header = () => {
    return (
            <div className="container ">
                <header
                    className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <a href="/"
                       className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <NavLink to="/" className="fs-3 fw-bold" style={{color: "red", textDecoration: "none"}}>
                            Just-Do-It
                        </NavLink>
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><NavLink to="/tasks" className="nav-link px-2 link-dark" style={{color: "red"}}>Найти задание</NavLink></li>
                        <li><NavLink to="/addTask" className="nav-link px-2 link-dark" style={{color: "red"}}>Создать задание</NavLink></li>
                        <li><NavLink to="#" className="nav-link px-2 link-dark" style={{color: "red"}}>О нас</NavLink></li>

                    </ul>

                    <div className="col-md-3 text-end">
                        <NavLink to="/signIn" type="button" className="btn btn-outline-danger me-2">
                                Войти
                        </NavLink>
                        <NavLink to="/registry" type="button" className="btn btn-outline-danger me-2">
                                Зарегистрироваться
                        </NavLink>
                    </div>
                </header>
            </div>
    );
};

export default Header;