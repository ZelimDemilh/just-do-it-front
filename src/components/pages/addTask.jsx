import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker, GeolocateControl } from "react-map-gl";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uploadCategories } from "../../store/categoriesSlice";
import { Dropdown } from "react-bootstrap";
import { addTaskForm } from "../../store/taskSlice";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { profile } from "../../store/signInSlice";

const AddTask = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const user = useSelector((state) => state.signIn.userDate);

  const [viewport, setViewport] = useState({
    latitude: 43.31195,
    longitude: 45.68895,
    width: "700px",
    height: "370px",
    zoom: 12,
  });

  useEffect(() => {
    dispatch(uploadCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [marker, setMarker] = useState("");
  const [message, setMessage] = useState("");

  const handleHeading = (e) => {
    setHeading(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.currentTarget.value);
    console.log(category);
  };

  const handleCoors = (e) => {
    let lngLat = e.lngLat;
    setMarker(
      <Marker longitude={lngLat[0]} latitude={lngLat[1]}>
        <img
          className="marker"
          width={"13px"}
          src="https://pngicon.ru/file/uploads/ikonka-geolokatsii-85x128.png"
          alt=""
        />
      </Marker>
    );
  };

  const handleSendToServer = () => {
    if (
      heading === "" ||
      description === "" ||
      price === "" ||
      category === "" ||
      marker === ""
    ) {
      setMessage(
        "Пожалуйста заполните все поля и оставьте ваше местоположение на карте"
      );
    } else {
      dispatch(
        addTaskForm({
          heading: heading,
          description: description,
          price: price,
          category: category,
          longitude: marker.props.longitude,
          latitude: marker.props.latitude,
        })
      );
      setHeading("");
      setDescription("");
      setPrice("");
      setCategory("");
      setMarker("");
      setMessage("Задание добавленно");
    }
  };

  return (
    <div className="mb-5">
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
                      return cat.name;
                    }
                    return null;
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
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="col">
              <ReactMapGL
                onClick={handleCoors}
                {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoiZXhjMG0iLCJhIjoiY2t4NnFoZTVkMnZpMjJ2cDh2aDllYjFmaCJ9.ALFjshQYvyK8G1RHIMSj3w"
                mapStyle="mapbox://styles/exc0m/ckx6qzvrb8be414o48ev4me7x"
                onViewportChange={(viewport) => {
                  setViewport(viewport);
                }}
              >
                <div className="m-2">
                  <GeolocateControl>...</GeolocateControl>
                </div>
                {marker}
              </ReactMapGL>
            </div>
            <div className="text-center mt-5">
              <Button variant="contained" onClick={handleSendToServer}>
                Добавить
              </Button>
              <h5
                className={
                  message === "Задание добавленно"
                    ? "text-success mt-2"
                    : "text-danger mt-2"
                }
              >
                {message}
              </h5>
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
    </div>
  );
};

export default AddTask;
