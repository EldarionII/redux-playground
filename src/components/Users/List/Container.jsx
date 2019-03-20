import React from 'react'
import {connect} from 'react-redux'
import UsersListPresentational from "./Presentational";
import {UsersReduxApi} from "../../../redux/api";

class UsersListContainer extends React.Component {
    toggleModal = () => {
        UsersReduxApi.userModalToggleNewUser()
    };

    deleteUser = userId => {
        UsersReduxApi.userDelete(userId)
            .then(() => UsersReduxApi.usersGet())
    };

    render() {
        const {users} = this.props;

        return (
            <UsersListPresentational users={users}
                                     toggleModal={this.toggleModal}
                                     createNewUser={this.createNewUser}
                                     deleteUser={this.deleteUser}
            />
        )
    }
}

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps)(UsersListContainer)