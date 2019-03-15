import React from 'react'

import {SiteHeader} from "./Common/SiteHeader";
import {UsersReduxApi} from "../redux/api";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Profile extends React.Component {
    currentSet = e => {
        const {users} = this.props;
        const current = {
            ...users.current,
            name: e.target.value
        };

        UsersReduxApi.currentGet(current)
    };

    render() {
        return (
            <React.Fragment>
                <SiteHeader/>
                <main>
                    <header>
                        <h1>
                            Это Профиль пользователя.
                        </h1>
                        <label>Сменить имя пользователя</label>
                        <input onChange={this.currentSet}/>
                    </header>
                </main>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users
});

export default withRouter(connect(mapStateToProps)(Profile))