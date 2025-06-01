import { createSlice } from '@reduxjs/toolkit';

var CounterSlice = createSlice({
    name: 'userData', //name of the slice 
    initialState: {
        data: []
    },
    reducers: {
        AddData: (state, action) => {
            state.data.push(action.payload);
        },
        RemoveData: (state, action) => {
            state.data = []
        }
    }   
})

export const { AddData, RemoveData } = CounterSlice.actions //exporting the action
export default CounterSlice.reducer //exporting the reducer