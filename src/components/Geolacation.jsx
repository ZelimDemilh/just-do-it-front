import React from "react";
import { YMaps, Map } from "react-yandex-maps";

const Geolacation = () => {
  let position = [55.55, 55.55];

  navigator.geolocation.getCurrentPosition(success, error, {
    // высокая точность
    enableHighAccuracy: true,
  });

  function success({ coords }) {
    // получаем широту и долготу
    const { latitude, longitude } = coords;
    const position = [latitude, longitude];
    console.log(position); // [широта, долгота]
  }

  function error({ message }) {
    console.log(message); // при отказе в доступе получаем PositionError: User denied Geolocation
  }

  return (
    <YMaps>
      <div>
        <Map defaultState={{ center: position, zoom: 14 }} />
      </div>
    </YMaps>
    // <div>
    //     {getMyLocation()}
    // </div>
  );
};

export default Geolacation;
