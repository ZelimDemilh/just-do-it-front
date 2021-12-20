import React from "react"
import img1 from "./img1.png"
import img2 from "./img2.png"
import img3 from "./img3.png"

import cl from "./HomePage.module.css"
import FirstSlide from "./Slides/FirstSlide"
import SecondSlide from "./Slides/SecondSlide"
import ThirdSlide from "./Slides/ThirdSlide"

const HomePage = () => {
  return (
    <div className="container">
      <div className="w-100 d-flex align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <img src={img} alt="" className={`${cl.img}`} />
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center justify-content-md-between py-3 mb-4"></div>
      <div className="w-100">
        <FirstSlide />
        <SecondSlide />
        <ThirdSlide />
      </div>
    </div>
  )
}

export default HomePage
