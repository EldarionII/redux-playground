import {store} from "../store";
import {UsersActions} from "../actions";

export class UsersReduxApi {
    static currentGet = current => {
        store.dispatch(UsersActions.currentSet(current))
    }
}