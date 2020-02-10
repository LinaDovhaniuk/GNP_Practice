import {
    ADD_USER_TO_UNIVERSITY_SUCCESS,
    AUTH_USER_SUCCESS,
    CANCEL_EDIT_USER,
    EDIT_USER_SUCCESS,
    GET_UNIVERSITIES_SUCCESS,
    GET_USERS,
    REGISTER_USER_SUCCESS,
} from './types';

export const editUserSuccess = (user) => ({
    type:    EDIT_USER_SUCCESS,
    payload: user,
});
export const editUser = (user) =>
    async (dispatch) => {
        const response = await fetch(
            `http://localhost:8080/users/${user.id}`,
            {
                mode:    'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': user.token.toString(),
                },
                method: 'PATCH',
                body:   JSON.stringify(user),
            });
        const responseJson = await response.json();
        const arrayData = Array.from(responseJson);
        const data = arrayData.find((u) => u.id === user.id);
        dispatch(editUserSuccess(data));

    };

export const getUsersSuccess = (data) => ({
    type: GET_USERS,
    payload: data,
});

export const getUsers = (user) =>
    async (dispatch) => {
        const response = await fetch(
            `http://localhost:8080/users`,
            {
                mode:    'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': user.token.toString(),
                },
                method: 'GET',
            });
        const responseJson = await response.json();
        dispatch(getUsersSuccess(responseJson));

    };

export const cancelEditMode = () => ({
    type:    CANCEL_EDIT_USER,
});

export const getAllUniversities = (authToken) =>
    async (dispatch) => {
        const response = await fetch(
            `http://localhost:8080/universities`,
            {
                mode:    'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': authToken.toString(),
                },
                method: 'GET',
            });
        const responseJson = await response.json();
        dispatch(getAllUniversitiesSuccess(responseJson));

    };
export const getAllUniversitiesSuccess = (data) => ({
    type:    GET_UNIVERSITIES_SUCCESS,
    payload: data,
});

export const registerUserSuccess = (data) => ({
    type:    REGISTER_USER_SUCCESS,
    payload: data,
});

export const registerUser = (values) =>
    async (dispatch, getState) => {
        const response = await fetch(
            `http://localhost:8080/register`,
            {
                mode:    'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body:   JSON.stringify(values),

            });
        const responseJson = await response.json();
        dispatch(registerUserSuccess(responseJson));

    };

export const authUser = (values) =>
    async (dispatch, getState) => {
        const response = await fetch(
            `http://localhost:8080/login`,
            {
                mode:    'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body:   JSON.stringify(values),

            });
        const responseJson = await response.json();
        dispatch(authUserSuccess(responseJson));

    };

export const authUserSuccess = (data) => ({
    type:    AUTH_USER_SUCCESS,
    payload: data,
});

export const addUserToUniversitySuccess = (data) => ({
    type:    ADD_USER_TO_UNIVERSITY_SUCCESS,
    payload: data,
});


export const addUserToUniversity = (university, user) =>
    async (dispatch) => {
        const response = await fetch(
            `http://localhost:8080/users/${user.id}/assign/${university.id}`,
            {
                mode:    'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': user.token.toString(),
                },
                method: 'POST',
                body:   JSON.stringify({'userId': user.id, 'universityId': university.id}),

            });
        const responseJson = await response.json();
        dispatch(addUserToUniversitySuccess(responseJson));

    };



