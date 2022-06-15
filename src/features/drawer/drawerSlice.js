import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        toggleDrawer: (state) => {
            if(state.isOpen){
                return {
                    isOpen: false
                }
            }
            else{
                return {
                    isOpen: true
                }
            }
        }
    }
})

export default drawerSlice.reducer
export const drawerAction = drawerSlice.actions 