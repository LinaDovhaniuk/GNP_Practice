import React, { Component } from 'react';
import Box from '@material-ui/core/Box';

import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addUser, cancelEditMode, deleteUser, editUser, backToUsersList } from '../redux/actions';
import { NavLink, withRouter } from 'react-router-dom';
import User from '../components/User';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { createSelector } from 'reselect';

const colors = [
    '#ef5350', '#ab47bc', '#7e57c2', '#5c6bc0', '#42a5f5',
    '#26a69a', '#4caf50', '#fbc02d', '#ef6c00', '#e65100',
    '#c2185b', '#c51162', '#aa00ff', '#3f51b5', '#311b92',
    '#2962ff', '#00838f', '#1de9b6', '#ffc107', '#03a9f4'];

const styles = {
    mainBox: {
        display:        'flex',
        justifyContent: 'center',
        alignItems:     'center',
        flexDirection:  'column',
    },
    btn: {
        width:          '60%',
        display:        'flex',
        justifyContent: 'right',
        fontSize:       '3vw',
        textDecoration: 'none',
    },
    arrow: {
        display:         'flex',
        justifyContent:  'center',
        alignItems:      'center',
        color:           'white',
        width:           40,
        height:          40,
        borderRadius:    '50%',
        backgroundColor: '#f50057',
        '& > img':       {
            height:     10,
            fontWeight: 'bold',
        },
    },
};

class UsersPage extends Component {
    constructor (props) {
        super(props);
        const { editMode = false } = props;
        this.state = { editMode };
    }

    getAbbreviation = (user) => `${user.name.charAt(0)}${user.surname.charAt(0)}`;

    onEditIconClick = () => {
        this.setState({ editMode: true });
    };

    onSave = (user) => {
        this.setState({
            editMode: false,
        });
        user.addMode ? this.props.addUser(user) : this.props.editUser({
            ...user,
        });
    };

    onCancel = () => {
        this.setState({ editMode: false });
        this.props.cancelEditMode();
    };

    onBack = () => {
        this.setState({
            editMode: false,
        });
        this.props.backToUsersList();
    };

    render () {
        const { users, match, classes } = this.props;
        const selectUserbyId = createSelector(() => this.props.users, (u) => {
            return users.find((u) => u.id.toString() === match.params.id.toString());
        });
        const user = selectUserbyId(users);

        return (<Box className = { classes.mainBox }>
            <User
                editMode = { false }
                key = { user.id }
                user = { user }
                userPage
            />
            <Box className = { classes.btn }>
                <NavLink className = { classes.arrow } to = '/users'><ArrowBackIcon onClick = { this.onBack } /></NavLink>
            </Box>
        </Box>);
    }
}

export default withRouter(
    compose(
        withStyles(styles),
        connect(null, { editUser, deleteUser, addUser, cancelEditMode, backToUsersList })
    )(UsersPage));
