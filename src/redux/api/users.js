import {store} from "../store";
import {UsersActions} from "../actions";
import {UsersApi} from "../../api/users";
import {USERS} from "../../constants/users";

export class UsersReduxApi {
	static currentGet = current => {
		store.dispatch(UsersActions.currentSet(current))
	};

	static usersGet = () => {
		return UsersApi.usersGet()
			.then(res => res.data)
			.then(users =>
				store.dispatch(UsersActions.usersSet(users))
			);
	};

	static userCreate = user => {
		return UsersApi.userCreate(user)
	};

	static userUpdate = (userId, user) => {
		return UsersApi.userUpdate(userId, user)
	};

	static userDelete = userId => {
		return UsersApi.userDelete(userId)
	};

	static userModalToggleNewUser = () => {
		store.dispatch(UsersActions.usersModalToggle(USERS.MODALS.USER_NEW))
	};
}