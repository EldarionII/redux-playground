import React from 'react'
import {connect} from 'react-redux'
import UsersListPresentational from "./Presentational";
import {UsersReduxApi} from "../../../redux/api";

class UsersListContainer extends React.Component {
    state = {
        isModalOpen: false
    }

    toggleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    createNewUser = e => {
        e.preventDefault()

        const form = e.target;
        const inputs = form.querySelectorAll('input, select');

        let newUserData = {}

        inputs.forEach(input => newUserData[input.name] = input.value);

        UsersReduxApi.userCreate(newUserData)
            .then(()=> UsersReduxApi.usersGet())
    };

    render() {
        const {users} = this.props;

        return (
            <UsersListPresentational users={users}
                                     state={this.state}
                                     toggleModal={this.toggleModal}
            />
        )
    }
}

const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps)(UsersListContainer)