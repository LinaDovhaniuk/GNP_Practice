import {
    ADD_USER_TO_UNIVERSITY_SUCCESS,
    GET_UNIVERSITIES_SUCCESS, GET_USERS
} from '../../actions/types';

const initialState = {
    users:        [],
    universities: {},
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_USER_TO_UNIVERSITY_SUCCESS:
            return {
                ...state,
                users: [...payload],
            };
        case GET_UNIVERSITIES_SUCCESS:
            return {
                ...state,
                universities: [...payload],
            };
        case GET_USERS:
            return {
                ...state,
                users: [...payload],
            };

        default:
            return state;
    }
};
