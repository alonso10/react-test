import React, { Component, Fragment } from "react";
import UserTable from "../../components/table/UserTable";
import UserButton from '../../components/buttons/UserButton';
import ColorPicker from '../../components/color-picker';
import { wrapper } from "../../components/table/hoc/HeaderTable";


export default class UsersView extends Component {

    render() {
        const Table = wrapper(UserTable);
        return (
            <Fragment>
                <h1>Lista de Usuarios</h1>
                <UserButton />
                <ColorPicker />
                <Table />
            </Fragment>
        );
    }
}
