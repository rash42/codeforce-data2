import mode from "../features/mode/modeSlice";
import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "../features/drawer/drawerSlice";

const store = configureStore({
    reducer: {
        mode: mode,
        drawer: drawerSlice
    }
})

export default store