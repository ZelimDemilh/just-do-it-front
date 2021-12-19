import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { profile } from "../../store/signInSlice";

const Profile = () => {

  const dispatch = useDispatch();

  const userDate = useSelector((state) => state.signIn.userDate);

  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  return (
    <div className="card mb-3 container w-50 border-0 ">
      <div className="row g-0 d-flex">
        <div class="col-md-4 d-flex justify-content-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
            className="img-fluid rounded-start h-50"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Общая информация</th>
                  <th scope="col">{userDate.firstName}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Имя</th>
                  <td>{userDate.firstName}</td>
                </tr>
                <tr>
                  <th scope="row">Фамилия</th>
                  <td>{userDate.lastName}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th scope="col">Контакты</th>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th scope="col">Номер телефона</th>
                  <td>{userDate.phone}</td>
                </tr>
                <tr>
                  <th scope="col">Электронный адрес</th>
                  <td>{userDate.email}</td>
                </tr>
              </thead>
            </table>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
