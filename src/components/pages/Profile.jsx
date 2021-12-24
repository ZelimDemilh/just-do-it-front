import { Rating } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { Helmet } from "react-helmet"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { profile, updateAvatar } from "../../store/signInSlice"

const Profile = () => {
  const [newAvatar, setNewAvatar] = useState(null)

  const { token, pending } = useSelector((state) => state.signIn)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  !token && navigate(-1)

  const userDate = useSelector((state) => state.signIn.userDate)

  const handleSetAvatar = (file) => {
    setNewAvatar(file)
  }

  const handleUpdateAvatar = () => {
    dispatch(updateAvatar(newAvatar))
  }

  useEffect(() => {
    dispatch(profile())
  }, [dispatch])

  return (
    <>
      <Helmet>
        <title>Профиль пользователя</title>
      </Helmet>
      {pending ? (
        <div class="d-flex justify-content-center">
          <Spinner animation="grow" variant="danger" className="m-5" />
        </div>
      ) : (
        <div className="card mb-3 container w-50 border-0 ">
          <div className="row g-0 d-flex">
            <div class="col-md-4">
              <img
                src={`http://localhost:6557/${userDate.avatar}`}
                className="img-fluid rounded-start h-50"
                alt="..."
              />
              <input
                type="file"
                id="formFile"
                accept="image/*"
                name="avatar"
                onChange={(e) => handleSetAvatar(e.target.files[0])}
              />
              <button onClick={handleUpdateAvatar}>Next</button>
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
                        <td>Ваш рейтинг:</td>
                        <td>
                          <Rating
                            name="half-rating-read"
                            defaultValue={userDate.rating}
                            precision={0.5}
                            readOnly
                          />
                        </td>
                      </tr>
                    ) : (
                      <Link
                        to="/my-tasks"
                        className="btn btn-danger w-100 p-1 my-2"
                      >
                        Мои объявления
                      </Link>
                    )}
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
      )}
    </>
  )
}

export default Profile
