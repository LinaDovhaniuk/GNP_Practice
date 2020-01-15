import React from 'react';
import users from '../data/users';
import User from './User.js';
import { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import EditUser from './EditUser';

const colors = ['#ef5350', '#ab47bc', '#7e57c2', '#5c6bc0', '#42a5f5', '#26a69a', '#4caf50', '#fbc02d', '#ef6c00', '#e65100'];

const styles = {
    mainBox: {
        display:        'flex',
        justifyContent: 'center',
        alignItems:     'center',
        flexDirection:  'column',
        fontSize:       20,
    },
};

class UsersList extends Component {
    state = {
        users,
    };

    render () {
        const { users = [], ...rest } = this.props;
        const { classes } = this.props;

        return (
            <div className = { classes.mainBox }>
                {users.map((user) =>
                    (<User
                        key = { user.id }
                        user = { user }
                        editMode = {user.editMode}
                        { ...rest }
                    />)
                )}
            </div>
        );
    }

}

export default withStyles(styles)(UsersList);
