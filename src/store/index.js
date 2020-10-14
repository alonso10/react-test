import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/users';
import colorReducer from './reducers/colorTable';


export default configureStore({
    reducer: {
        users: userReducer,
        colorTable: colorReducer,
    }
});
