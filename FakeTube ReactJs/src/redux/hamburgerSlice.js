import { createSlice } from "@reduxjs/toolkit";

const hamburgerSlice=createSlice({
    name:"appSlice",
    initialState:{
        toggle:false
    },
    reducers:{
        toggleMenu:(state)=>{
            state.toggle=(!state.toggle);
        }
    }
})

export const{toggleMenu}=hamburgerSlice.actions;
export default hamburgerSlice.reducer;