import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import {MainHeader} from "./MainHeader";

class Home extends React.Component {
    render() {
        const {users} = this.props;

        return (
            <React.Fragment>
                <MainHeader/>
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