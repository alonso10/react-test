import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
    name: 'colorTable',
    initialState: {
        value: '#ffffff'
    },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { changeColor } = colorSlice.actions;

export default colorSlice.reducer;

