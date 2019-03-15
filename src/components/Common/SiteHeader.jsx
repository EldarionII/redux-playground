import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../../images/logo.svg'
import {PageWrapper} from "./PageWrapper";

export class SiteHeader extends React.Component {
    renderNavigation = () => {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to={'/users'}>Пользователи</Link>
                    </li>
                </ul>
            </nav>
        )
    }

    render() {
        return (
            <header className={'site-header'}>
                <PageWrapper>
                    <div className={'site-header__container'}>
                    <Link to={'/'}>
                        <img className={'site-header__logo'}
                             src={Logo}
                             alt={"Лого"}
                        />
                    </Link>
                    {this.renderNavigation()}
                    </div>
                </PageWrapper>
            </header>
        )
    }
}