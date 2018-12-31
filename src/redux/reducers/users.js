import {USERS} from "../../constants/users";

const defaultStaate = {
    current: {
        name: 'Bob'
    }
};

export const users = (state = defaultStaate, action) => {
    switch (action.type) {
        case USERS.ACTIONS.USERS_SET:
            return {
                ...state,
                users: action.users
            };
        case  USERS.ACTIONS.CURRENT_SET:
            return {
                ...state,
                current: action.current
            };
        default:
            return state
    }
};