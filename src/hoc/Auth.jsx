import React from "react"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

const Auth = ({ children }) => {
  const location = useLocation()

  const token = useSelector((state) => state.signIn.token)

  if (!token) {
    return <Navigate to="/signIn" state={{ from: location }} />
  }

  return children
}

export default Auth
