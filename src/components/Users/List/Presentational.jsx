import React from 'react'

import {PageWrapper} from "../../Common/PageWrapper";
import NewUserModal from "../NewUserModal/Container";

export default class UsersListPresentational extends React.Component {
    renderUsersList = () => {
        const {users, deleteUser} = this.props;
        const usersList = users.users.map(user =>
            <li key={user._id}>
                {user.email}
                <button onClick={() => deleteUser(user._id)}>
                    Удалить
                </button>
            </li>
        );

        return (
            <ul>
                {usersList}
            </ul>
        )
    };

    render() {
        const {toggleModal} = this.props;

        return (
            <main>
                <PageWrapper>
                    <h1>Список пользователей</h1>
                    <button onClick={toggleModal}>
                        Добавить пользователя
                    </button>
                    {this.renderUsersList()}
                    <NewUserModal/>
                </PageWrapper>
            </main>
        )
    }
}