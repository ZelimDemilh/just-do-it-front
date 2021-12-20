import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="container text-center my-5">
        <h2>Страница не найдена</h2>
        <NavLink to="/" className="btn btn-outline-danger my-2" type="button">
          Вернуться на главную
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
