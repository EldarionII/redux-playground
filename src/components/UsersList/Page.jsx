import React from 'react'
import {SiteHeader} from "../Common/SiteHeader";
import {UsersReduxApi} from "../../redux/api";
import UsersList from "./List/Container";

export default class UsersPage extends React.Component {
    componentDidMount() {
        UsersReduxApi.usersGet()
    }

    render() {
        return (
            <section>
                <SiteHeader/>
                <UsersList/>
            </section>
        )
    }
}