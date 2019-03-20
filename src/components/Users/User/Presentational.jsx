import React from 'react'

export default class UserPresentational extends React.Component {
    render() {
        const {user} = this.props;

        return (
            <section>
                <img className={'user__avatar'}/>
                {user.name}
                {user.email}
            </section>
        )
    }
}