import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../images/logo.svg'

export class MainHeader extends React.Component {
    render() {
        return (
            <header className={'main-header'}>
                <Link to={'/'}>
                    <img className={'main-header__logo'}
                         src={Logo}
                         alt={"Лого"}
                    />
                </Link>

                Шапка Сайта
            </header>
        )
    }
}