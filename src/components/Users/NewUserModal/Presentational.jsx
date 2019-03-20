import React from 'react'
import Modal from 'react-responsive-modal'
import {USERS} from "../../../constants/users";

export default class NewUserModalPresentational extends React.Component {
    renderInputsList = () => {
        const {inputFields} = this.props;

        const inputNodes = inputFields.map(inputField =>
            <li key={inputField.name}>
                <input className={'new-user-modal_item'}
                       name={inputField.name}
                       placeholder={inputField.placeholder}
                />
            </li>
        );

        return (
            <ul className={'new-user-modal_list'}>
                {inputNodes}
            </ul>
        )
    };

    renderUserForm = () => {
        const {createNewUser, clearForm} = this.props;

        return (
            <form onSubmit={createNewUser} className={"new-user-modal__form"}>
                {this.renderInputsList()}
                <div className={'new-user-modal__actions'}>
                    <button>
                        Добавить
                    </button>
                    <button onClick={clearForm}>
                        Отчистить
                    </button>
                </div>
            </form>
        )
    };

    render() {
        const {users, toggleModal} = this.props;
        const isModalOpen = users.modals[USERS.MODALS.USER_NEW].isOpen;

        return (
            <Modal open={isModalOpen} onClose={toggleModal}>
                <section className={'new-user-modal'}>
                    <h2 className={'new-user-modal__title'}>Добавить Пользователя</h2>
                    {this.renderUserForm()}
                </section>
            </Modal>
        )
    }
}