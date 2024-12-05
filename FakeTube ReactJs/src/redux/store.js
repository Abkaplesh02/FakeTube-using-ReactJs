import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";
const store=configureStore({
    reducer:{
        appSlice:hamburgerSlice,

    }
})

export default store;