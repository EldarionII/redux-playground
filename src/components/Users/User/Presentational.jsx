import React from 'react'

export default class UserPresentational extends React.Component {
    render() {
        const {user} = this.props;

        return (
            <section>
                <img className={'user__avatar'}/>
                <input defaultValue={user.first_name}/>
                {user.email}
            </section>
        )
    }
}