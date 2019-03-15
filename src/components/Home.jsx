import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import {SiteHeader} from "./Common/SiteHeader";
import {UsersReduxApi} from "../redux/api";

class Home extends React.Component {
    componentDidMount() {
        UsersReduxApi.usersGet();
    }

    renderUsers = () => {
        const {users} = this.props;

        return users.users.map(user =>
            <div key={user.id}>
                <p>{user.email}</p>
                <p>{user.id}</p>
                <p>{user.password}</p>
            </div>
        )
    };

    render() {
        const {users} = this.props;

        return (
            <React.Fragment>
                <SiteHeader/>
                <main>
                    <header>
                        <h1>
                            Это главная страница.
                        </h1>
                    </header>
                    <main>
                        <section>
                            <h2>Ссылки</h2>
                            <div>
                                Имя текущего пользователя - {users.current.name}
                            </div>
                            <ul>
                                <li>
                                    <Link to={'/profile'}>Профиль пользователя</Link>
                                </li>
                            </ul>
                            {this.renderUsers()}
                        </section>
                    </main>
                </main>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users
});

export default withRouter(connect(mapStateToProps)(Home))