import React from "react";
import img1 from "../images/img1.png";
import cl from "../HomePage.module.css";

const FirstSlide = () => {
  return (
    <div className="w-75 mb-5 m-auto d-flex align-items-center justify-content-center justify-content-md-between py-3">
      <img src={img1} alt="" className={`${cl.img}`} />
    </div>
  );
};

export default FirstSlide;
