import { EDIT_USER, DELETE_USER, ADD_USER, ADD_NEW_USER, CANCEL_EDIT_USER } from '../../actions/types';
import users from '../../../data/users';

const initialState = {
    data:    users,
    newUser: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case EDIT_USER:
            return {
                ...state,
                data: state.data.map((user) => user.id === payload.id ? payload : user),
            };

        case DELETE_USER:
            return {
                ...state,
                data: state.data.filter((user) => user.id !== payload),
            };

        case ADD_USER:
            return {
                data:    [...state.data, payload],
                newUser: null,
            };

        case ADD_NEW_USER:
            return {
                ...state,
                newUser: {
                    id:        Math.random()*1000,
                    name:      '',
                    surname:   '',
                    email:     '',
                    birthDate: '',
                    editMode:  true,
                    addMode:   true,
                },
            };
        case CANCEL_EDIT_USER:
            return {
                data:    [...state.data],
            };


        default:
            return state;
    }
};
