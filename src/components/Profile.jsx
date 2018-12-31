import React from 'react'

import {MainHeader} from "./MainHeader";

export default class Profile extends React.Component {
    render () {
        return (
            <React.Fragment>
                <MainHeader/>
                <main>
                    <header>
                        <h1>
                            Это Профиль пользователя.
                        </h1>
                    </header>
                </main>
            </React.Fragment>
        )
    }
}