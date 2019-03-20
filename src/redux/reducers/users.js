import {USERS} from "../../constants/users";

const defaultStaate = {
    users: [],
    current: {
        name: 'Bob'
    },
    modals: {
        [USERS.MODALS.USER_NEW]: {isOpen: false}
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
        case  USERS.ACTIONS.MODAL_TOGGLE:
            return {
                ...state,
                modals: {
                    ...state.modals,
                    [action.modal]: {
                        isOpen: !state.modals[action.modal].isOpen
                    }
                }
            };
        default:
            return state
    }
};