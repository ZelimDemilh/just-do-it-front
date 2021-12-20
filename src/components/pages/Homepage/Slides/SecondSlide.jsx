import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import cl from "../HomePage.module.css";
import icon1 from "../Iconly/icon1.png";
import icon2 from "../Iconly/icon2.png";
import icon3 from "../Iconly/icon3.png";
import icon4 from "../Iconly/icon4.png";

const SecondSlide = () => {
  const token = localStorage.getItem("token");

  return (
    <div
      className={`d-flex flex-column text-center justify-content-center ${cl.backImg2}`}
    >
      <div className="text-center text-white m-4">
        <h2>Как это работает?</h2>
      </div>
      <div
        className={`w-100 d-flex py-3 align-items-center justify-content-around text-center`}
      >
        <div className="w-25 p-3 h-100 border-end border-2 bg-black bg-opacity-25">
          <img src={icon1} alt="" className="my-3" />
          <h5>Вы хотите сделать заказ</h5>
          <span>
            Расскажите, что необходимо разработать для себя или вашего бизнеса
          </span>
        </div>
        <div className="w-25 p-3 h-100 border-end border-2 bg-black bg-opacity-25">
          <img src={icon2} alt="" className="my-3" />
          <h5>Выбираете в каталоге исполнителя</h5>
          <span>Сравнивайте опыт исполнителей, стоимость сроки</span>
        </div>
        <div className="w-25 p-3 h-100 border-end border-2 bg-black bg-opacity-25">
          <img src={icon3} alt="" className="my-3" />
          <h5>Обсуждаете заказ</h5>
          <span>
            Общайтесь с исполнителем с помощью контактных данных в профиле
          </span>
        </div>
        <div className="w-25 p-3 h-100 bg-black bg-opacity-25">
          <img src={icon4} alt="" className="my-3 text-white" />
          <h5>Вы получаете результат, а исполнитель оплату</h5>
          <span>Сравнивайте опыт исполнителей, стоимость сроки</span>
        </div>
      </div>
      <div className="mt-5">
        <Button href={token ? "/tasks" : "/signIn"} variant="outline-light p-3">
          Начни прямо сейчас
        </Button>
      </div>
    </div>
  );
};

export default SecondSlide;
