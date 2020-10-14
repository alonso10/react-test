import React, { useState } from "react";
import { useSelector } from 'react-redux';

export default function UserTable(props) {

    const [headers] = useState(['id', 'nombre', 'email', 'genero']);
    const users = useSelector(state => state.users.users);

    return (
        <table className="table">
            <thead className="thead" style={{ backgroundColor: props.color }}>
                <tr>
                    {
                        headers.map(item => <th key={item} className="th">{item}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user =>
                        <tr key={user.id}>
                            <td className="td">{user.id}</td>
                            <td className="td">{user.name}</td>
                            <td className="td">{user.email}</td>
                            <td className="td">{user.gender}</td>
                        </tr>)
                }
            </tbody>
        </table>
    );

}
