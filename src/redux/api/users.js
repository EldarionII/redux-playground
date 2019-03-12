import {store} from "../store";
import {UsersActions} from "../actions";
import {UsersApi} from "../../api/users";

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
}