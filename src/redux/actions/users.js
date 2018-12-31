import {USERS} from "../../constants/users";

export class UsersActions {
    static currentSet = current => ({
        type: USERS.ACTIONS.CURRENT_SET,
        current
    })
}