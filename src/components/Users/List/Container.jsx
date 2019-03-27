import React from 'react'
import {connect} from 'react-redux'
import UsersListPresentational from "./Presentational";
import {UsersReduxApi} from "../../../redux/api";

class UsersListContainer extends React.Component {
	toggleModal = () => {
		UsersReduxApi.userModalToggleNewUser()
	};

	updateUserOnEnter = (userId, e) => {
		if (e.keyCode === 13) {
			this.updateUser(userId,e)
		}
	};

		updateUser = (userId, e) => {
		const user = {
			[e.target.name]: e.target.value
		};

		UsersReduxApi.userUpdate(userId, user)
			.then(() => UsersReduxApi.usersGet())
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
															 updateUser={this.updateUser}
															 updateUserOnEnter={this.updateUserOnEnter}
															 deleteUser={this.deleteUser}
			/>
		)
	}
}

const mapStateToProps = state => ({
	users: state.users
});

export default connect(mapStateToProps)(UsersListContainer)