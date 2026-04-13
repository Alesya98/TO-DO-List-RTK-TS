import { configureStore } from "@reduxjs/toolkit";

import taskSlice from "./taskSlice.ts"
import filterSlice from "./filterSlice.ts"


export const store = configureStore({
    reducer: ({
        tasks: taskSlice,
        filter: filterSlice,
    })
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch