import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";
import searchSlice from "./searchSlice"

const store=configureStore({
    reducer:{
        appSlice:hamburgerSlice,
        search:searchSlice,
       

    }
})

export default store;