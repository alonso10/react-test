import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../../services';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await getUsers();
    return response.data;
});

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        addUsers: (state, action) => {
            state.users = action.payload;
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {            
            state.users = action.payload;
        },
    }
});

export default userSlice.reducer;
