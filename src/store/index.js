import { configureStore } from "@reduxjs/toolkit";
import registry from "./registrySlice";
import signIn from "./signInSlice";
import categories from "./categoriesSlice";
import task from "./taskSlice";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

export default configureStore({
  reducer: {
    registry: registry,
    signIn: signIn,
    categories: categories,
    task: task,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, logger),
  devTools: true,
});
