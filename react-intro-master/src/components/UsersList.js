import React from 'react';
import User from './User.js';
import { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

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

    render () {
        const { users = [], classes } = this.props;

        return (
            <div className = { classes.mainBox }>
                {users.map((user) =>
                    (<User
                        key = { user.id }
                        user = { user }
                        editMode = {user.editMode}
                    />)
                )}
            </div>
        );
    }

}
const mapStateToProps = ({ users }) => ({
    users: users.newUser ? [...users.data, users.newUser] : users.data,
});

export default withRouter(compose(
    withStyles(styles),
    connect(mapStateToProps)
)(UsersList));
