import React from 'react'
import Modal from 'react-responsive-modal'
import {PageWrapper} from "../../Common/PageWrapper";
import {UsersReduxApi} from "../../../redux/api";

export default class UsersListPresentational extends React.Component {

    renderUsersList = () => {
          const {users} = this.props;
          const usersList = users.users.map(user =>
              <li key={user.id}>{user.email}</li>
          );

          return (
              <ul>
                  {usersList}
              </ul>
          )
    }

    renderUserForm = () => {
        return (
            <form onSubmit={this.createNewUser}>
                <input placeholder={'email'} name={'email'}/>
                <input placeholder={'password'} name={'password'}/>
                <select defaultValue={2} name={'role'}>
                    <option value={1}>admin</option>
                    <option value={2}>user</option>
                </select>
                <button>Create new user</button>
            </form>
        )
    };

    render() {
        const {state, toggleModal} = this.props;

        return (
            <main>
                <PageWrapper>
                    <h1>Список пользователей</h1>
                    <button onClick={toggleModal}>
                    Добавить пользователя
                </button>
                    {this.renderUsersList()}
                    {
                        state.isModalOpen
                        && <Modal open={true} onClose={toggleModal}>
                            {this.renderUserForm()}
                        </Modal>
                    }
                </PageWrapper>
            </main>
        )
    }
}