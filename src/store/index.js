import { configureStore } from "@reduxjs/toolkit";
import registry from "./registrySlice"
import signIn from "./signInSlice"


export default configureStore({
    reducer:{
        registry: registry,
        signIn: signIn
    }
})



