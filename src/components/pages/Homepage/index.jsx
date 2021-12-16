import React from 'react';
import img from "./hero.webp"
import cl from "./HomePage.module.css"

const HomePage = () => {
    return (
            <div className="container d-flex justify-content-between align-items-center ">
              <div className={cl.homePageText}>
                Освободим вас
                от ваших забот
              </div>
                <div className="w-100 d-flex justify-content-end  align-items-center   py-3 mb-4">
                    <img src={img} alt="" className={cl.img}/>
                </div>
            </div>
    );
};

export default HomePage;