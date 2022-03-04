import { configureStore } from "@reduxjs/toolkit";
import { covidApi } from "../services/covidApi";
import { caronaApi } from "../services/caronaApi";

export default configureStore({
  reducer: {
    [covidApi.reducerPath]: covidApi.reducer,
    [caronaApi.reducerPath]: caronaApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(covidApi.middleware, caronaApi.middleware),
});
