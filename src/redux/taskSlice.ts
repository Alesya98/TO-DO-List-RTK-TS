import { createSlice } from "@reduxjs/toolkit";
import type { TaskType } from "../types/task";
import { addTask, checkTask, clearTask, editTask, getTasks, removeTask } from "../api/taskAPI";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    data: null as TaskType[] | null,
    status: 'idle' as RequestStatusType,
    error: null as string | null
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTasks.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
        
            .addCase(addTask.fulfilled, (state, action) => {
              state.status = 'succeeded'
                state.data.push(action.payload)
            })
        
             .addCase(removeTask.fulfilled, (state, action) => {
                 state.status = 'succeeded'
                state.data = state.data.filter(item => item.id !== action.payload.id)
             })
        
              .addCase(checkTask.fulfilled, (state, action) => {
                  state.status = 'succeeded'
            const task = state.data.find((item) => item.id === action.payload[0].id);
            task.isCompleted = !task.isCompleted;
              })
        
          .addCase(editTask.fulfilled, (state, action) => {
                  state.status = 'succeeded'
            const task = state.data.find((item) => item.id === action.payload.id);
            task.title = action.payload.title;
          })
        
            .addCase(clearTask.fulfilled, (state, action) => {
                state.status = 'succeeded'
               state.data = state.data.filter(item => item.id !== action.payload.id)
           })


    },

     selectors: {
    selectTask: (sliceState) => sliceState.data,
  },
});

export default taskSlice.reducer
export const { selectTask } = taskSlice.selectors;
// export const { add, get} = taskSlice.actions;