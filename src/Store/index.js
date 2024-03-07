
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/Auth/userSlice";

const store = configureStore({  
    reducer:userReducer
})

export default store