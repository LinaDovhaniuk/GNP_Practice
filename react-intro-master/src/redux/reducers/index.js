import { combineReducers } from 'redux';
import usersData from './users';
import universitiesData from './universities';

export default combineReducers({ usersData, universitiesData });
