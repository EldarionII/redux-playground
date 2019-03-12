import React from 'react'
import {MainHeader} from "../MainHeader";
import {UsersReduxApi} from "../../redux/api";
import UsersList from "./List/Container";

export default class UsersPage extends React.Component {
    componentDidMount() {
        UsersReduxApi.usersGet()
    }

    render() {
        return (
            <section>
                <MainHeader/>
                <UsersList/>
            </section>
        )
    }
}