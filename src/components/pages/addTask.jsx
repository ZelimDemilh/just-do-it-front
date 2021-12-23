import React, { useEffect, useState } from "react"
import ReactMapGL, { Marker } from "react-map-gl"
import { TextField, Button, Autocomplete } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { uploadCategories } from "../../store/categoriesSlice"
import { Dropdown } from "react-bootstrap"
import { addTaskForm } from "../../store/taskSlice"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import {profile} from "../../store/signInSlice";

const AddTask = () => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories.categories)

  const user = useSelector((state) => state.signIn.userDate)

  const [viewport, setViewport] = useState({
    latitude: 43.31195,
    longitude: 45.68895,
    width: "700px",
    height: "370px",
    zoom: 10,
  })

    useEffect(() => {
        dispatch(profile())
    }, [dispatch])

    useEffect(() => {
    dispatch(uploadCategories())
  }, [dispatch])

  const [heading, setHeading] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")

  const handleHeading = (e) => {
    setHeading(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }

  const handleCategory = (e) => {
    setCategory(e.currentTarget.value)
    console.log(category)
  }

  const handleSendToServer = () => {
    dispatch(
      addTaskForm({
        heading: heading,
        description: description,
        price: price,
        category: category,
        latitude: viewport.latitude,
        longitude: viewport.longitude,
      })
    )
  }

  return (
    <>
      <Helmet>
        <title>Создать задание</title>
      </Helmet>
      <div className="container w-75">
        {user.isMaster ? (
          <div className="row mt-3">
            <div className="col">
              <TextField
                name="heading"
                value={heading}
                onChange={handleHeading}
                className="w-75 mb-5"
                id="outlined-basic"
                label="Заголовок"
                variant="outlined"
              />
              <TextField
                name="description"
                type="textarea"
                value={description}
                onChange={handleDescription}
                className="w-75 mb-5"
                id="outlined-basic"
                label="Описание задания"
                variant="outlined"
              />
              <TextField
                name="price"
                type="number"
                value={price}
                onChange={handlePrice}
                className="w-75 mb-5"
                id="outlined-basic"
                label="Цена"
                variant="outlined"
              />

              <Dropdown aria-valuetext={category} onChange={handleCategory}>
                <Dropdown.Toggle
                  name="category"
                  variant="outline-secondary"
                  id="dropdown-basic"
                >
                  {`Категория:  `}
                  {categories.map((cat) => {
                    if (cat._id === category) {
                      return cat.name
                    }
                    return null
                  })}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {categories.map((category) => {
                    return (
                      <Dropdown.Item
                        type="button"
                        className="dropdown-item text-start"
                        onClick={() => setCategory(category._id)}
                      >
                        {category.name}
                      </Dropdown.Item>
                    )
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="col">
              <ReactMapGL
                {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoiZXhjMG0iLCJhIjoiY2t4NnFoZTVkMnZpMjJ2cDh2aDllYjFmaCJ9.ALFjshQYvyK8G1RHIMSj3w"
                mapStyle="mapbox://styles/exc0m/ckx6qzvrb8be414o48ev4me7x"
                onViewportChange={(viewport) => {
                  setViewport(viewport)
                }}
              >
                {"Longitude: " +
                  viewport.longitude +
                  ", Latitude: " +
                  viewport.latitude}
                <Marker
                  latitude={viewport.latitude}
                  longitude={viewport.longitude}
                >
                  <img
                    width={"20px"}
                    src="https://pngicon.ru/file/uploads/ikonka-geolokatsii-85x128.png"
                    alt=""
                  />
                </Marker>
              </ReactMapGL>
            </div>
            <div className="text-center mt-5">
              <Button variant="contained" onClick={handleSendToServer}>
                Добавить
              </Button>
            </div>
          </div>
        ) : (
          <div className="container text-center my-5">
            <h3>Вы не заказчик.</h3>
            <Link to="/tasks" className="btn btn-danger my-2" type="button">
              Найти задание
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default AddTask
