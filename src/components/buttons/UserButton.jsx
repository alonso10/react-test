import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../store/reducers/users';

export default function UserButton() {
    const dispatch = useDispatch();

    const onGetUsersClicked = async () => {
        dispatch(fetchUsers());
    }

    return (
        <div className="content-button">
            <button className="button" onClick={onGetUsersClicked}>Obtener Usuarios</button>
        </div>
    );
}
