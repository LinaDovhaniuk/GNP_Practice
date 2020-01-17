import { EDIT_USER, DELETE_USER, ADD_USER, ADD_NEW_USER, CANCEL_EDIT_USER, BACK_TO_USERSLIST } from './types';

export const editUser = (user) => ({
    type: EDIT_USER,
    payload: user,
});

export const addUser = (user) => ({
    type: ADD_USER,
    payload: {
        ...user,
        editMode: false,
        addMode: false,
    },
});

export const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: id,
});

export const addNewUser = () => ({
    type: ADD_NEW_USER,
});

export const cancelEditMode = () => ({
    type: CANCEL_EDIT_USER,
});

export const backToUsersList = () => ({
    type: BACK_TO_USERSLIST,
});

