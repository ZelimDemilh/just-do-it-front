import React from 'react';
import img from "./Why-do-we-only-use-WordPress-to-build-websites.jpg"
import cl from "./HomePage.module.css"

const HomePage = () => {
    return (
            <div className="container d-flex ">
                <div className="w-100 d-flex align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <img src={img} alt="" className={`${cl.img}`}/>
                </div>
            </div>
    );
};

export default HomePage;