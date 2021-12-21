import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { profile } from "../../store/signInSlice"
import { useLocation, useNavigate } from "react-router-dom"

const Profile = () => {
  const token = useSelector((state) => state.signIn.token)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  !token && navigate("/")

  const userDate = useSelector((state) => state.signIn.userDate)

  useEffect(() => {
    dispatch(profile())
  }, [dispatch])

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
                  <th className="w-50">Общая информация</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Имя:</td>
                  <td>{userDate.firstName}</td>
                </tr>
                <tr>
                  <td>Фамилия:</td>
                  <td>{userDate.lastName}</td>
                </tr>
                <tr>
                  <td>Роль:</td>
                  <td>{userDate.isMaster ? "Заказчик" : "Исполнитель"}</td>
                </tr>
                {!userDate.isMaster ? (
                  <tr>
                    <td>Рейтинг:</td>
                    <td>{userDate.rating}</td>
                  </tr>
                ) : null}
              </tbody>
            </table>

            <table className="table">
              <thead>
                <tr>
                  <th className="w-50">Контакты</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Номер телефона:</td>
                  <td>{userDate.phone}</td>
                </tr>
                <tr>
                  <td>Электронный адрес:</td>
                  <td>{userDate.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
