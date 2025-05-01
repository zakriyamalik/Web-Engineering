import conceptReducer from "./reducers/conceptReducer";
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {
      store: conceptReducer,
    },
  });

export default store