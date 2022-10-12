import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainSlice from "./slices/mainSlice";

const reducers = combineReducers({
    main: mainSlice
})

export const store = configureStore({
    reducer: reducers
})