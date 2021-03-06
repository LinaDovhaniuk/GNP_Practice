import { AUTH_USER_SUCCESS, CANCEL_EDIT_USER, EDIT_USER_SUCCESS, REGISTER_USER_SUCCESS } from '../../actions/types';

const initialState = {
    user: {},
    universities: {},
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case EDIT_USER_SUCCESS:
            return {
                user: {...payload},
            };
        case CANCEL_EDIT_USER:
            return {
                ...state,
            };
        case REGISTER_USER_SUCCESS:
            return {
                user: { ...payload },
            };
        case AUTH_USER_SUCCESS:
            return {
                user: { ...payload },
            };

        default:
            return state;
    }
};
