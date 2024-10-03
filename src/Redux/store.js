import { configureStore } from "@reduxjs/toolkit";
import EditList_Food from "./ReduxFood";
export const store = configureStore({
    reducer: {
        Foods: EditList_Food
    }
})