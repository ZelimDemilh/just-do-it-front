import React, {useEffect} from "react"
import img1 from "./images/img1.png"
import img2 from "./images/img2.png"
import img3 from "./images/img3.png"

import cl from "./HomePage.module.css"
import FirstSlide from "./Slides/FirstSlide"
import SecondSlide from "./Slides/SecondSlide"
import ThirdSlide from "./Slides/ThirdSlide"
import { Helmet } from "react-helmet"
import {uploadCategories} from "../../../store/categoriesSlice";
import {useDispatch} from "react-redux";

const HomePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(uploadCategories())
    }, [dispatch])

  return (
    <>
      <Helmet>
        <title>Just-Do-It</title>
      </Helmet>
      <div className="w-100">
        <FirstSlide />
        <SecondSlide />
        <ThirdSlide />
      </div>
    </>
  )
}

export default HomePage
