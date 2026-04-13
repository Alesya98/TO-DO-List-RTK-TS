import { createSlice} from "@reduxjs/toolkit"

type FilterValue = 'all' | 'done' | 'active'

type initialStateType = {
    res: FilterValue;
}

const initialState:initialStateType = {
    res: 'all'
}


const filterSlice = createSlice ({
    name: 'filter',
    initialState,
    reducers: {
        filter(state, action) {
            state.res = action.payload
        }
    },
    selectors: {
    selectFilter: (sliceState) => sliceState.res,
  },


})

export default filterSlice.reducer
export const { filter } = filterSlice.actions;
export const { selectFilter } = filterSlice.selectors;