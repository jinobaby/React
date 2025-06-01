import { createSlice } from '@reduxjs/toolkit';

var CounterSlice = createSlice({
    name: 'userData', //name of the slice 
    initialState: {
        data: []
    },
    reducers: {
        AddData:(state, action) => {
            state.data.push(action.payload);
        }
    }   
})

export const { AddData } = CounterSlice.actions //exporting the action
export default CounterSlice.reducer //exporting the reducer