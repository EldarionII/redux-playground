import React from 'react'
import {connect} from 'react-redux'
import NewUserModalPresentational from "./Presentational";
import {UsersReduxApi} from "../../../redux/api";

class NewUserModalContainer extends React.Component {
    state = {
        inputFields: [
            {name: "email", placeholder: "email"},
            {name: "password", placeholder: "пароль"},
            {name: "first_name", placeholder: "имя"},
            {name: "last_name", placeholder: "фамилия"},
            {name: "phone", placeholder: "телефон"},
        ]
    };

    toggleModal = () => {
        UsersReduxApi.userModalToggleNewUser()
    };

    clearForm = e => {
        e.preventDefault();

        const form = e.target.parentNode;
        const inputs = form.querySelectorAll('input, select');

        inputs.forEach(input => input.value = null)
    };

    createNewUser = e => {
        e.preventDefault();

        const form = e.target;
        const inputs = form.querySelectorAll('input, select');

        let newUserData = {};

        inputs.forEach(input => newUserData[input.name] = input.value);

        UsersReduxApi.userCreate(newUserData)
            .then(() => UsersReduxApi.usersGet())
    };

    render() {
        const {users} = this.props;

        return (
            <NewUserModalPresentational users={users}
                                        inputFields={this.state.inputFields}
                                        toggleModal={this.toggleModal}
                                        createNewUser={this.createNewUser}
                                        clearForm={this.clearForm}
            />
        )
    }
}

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps)(NewUserModalContainer)