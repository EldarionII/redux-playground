import {USERS} from "../../constants/users";

export class UsersActions {
    static currentSet = current => ({
        type: USERS.ACTIONS.CURRENT_SET,
        current
    });

    static usersSet = users => ({
        type: USERS.ACTIONS.USERS_SET,
        users
    });

    static usersModalToggle = modal => ({
        type: USERS.ACTIONS.MODAL_TOGGLE,
        modal
    })
}