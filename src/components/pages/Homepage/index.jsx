import React from "react"
import img1 from "./images/img1.png"
import img2 from "./images/img2.png"
import img3 from "./images/img3.png"

import cl from "./HomePage.module.css"
import FirstSlide from "./Slides/FirstSlide"
import SecondSlide from "./Slides/SecondSlide"
import ThirdSlide from "./Slides/ThirdSlide"

const HomePage = () => {
  return (
    <div className="container">
      <div className="w-100">
        <FirstSlide />
        <SecondSlide />
        <ThirdSlide />
      </div>
    </div>
  )
}

export default HomePage
