import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./addReducer";

const store=configureStore({
    reducer:{
        Add:addReducer,
    },
})

export default store