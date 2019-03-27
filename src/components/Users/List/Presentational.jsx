import React from 'react'

import {PageWrapper} from "../../Common/PageWrapper";
import NewUserModal from "../NewUserModal/Container";

export default class UsersListPresentational extends React.Component {
	renderUsersList = () => {
		const {users, updateUser, updateUserOnEnter, deleteUser} = this.props;
		const usersList = users.users.map(user =>
			<li key={user._id}>
				<input defaultValue={user.first_name}
							 name={'first_name'}
							 onBlur={e => updateUser(user.id, e)}
							 onKeyDown={e => updateUserOnEnter(user.id, e)}
				/>
				{user.email}
				<button onClick={() => deleteUser(user.id)}>
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