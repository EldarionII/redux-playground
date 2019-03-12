import React from 'react'
import Modal from 'react-responsive-modal'

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

    render() {
        const {state, toggleModal} = this.props;

        return (
            <section>
                <button onClick={toggleModal}>
                    Добавить пользователя
                </button>
                {this.renderUsersList()}
                {
                    state.isModalOpen
                    && <Modal open={true} onClose={toggleModal}>
                        hi
                    </Modal>
                }
            </section>
        )
    }
}