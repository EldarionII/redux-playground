import React from 'react'
import {Link} from 'react-router-dom'

import {MainHeader} from "./MainHeader";

export default class Home extends React.Component {
    render () {
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