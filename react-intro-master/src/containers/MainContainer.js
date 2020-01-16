import users from '../data/users';
import { Component } from 'react';
import UsersList from '../components/UsersList';
import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addNewUser } from '../redux/actions';

const styles = {
    add: {
        color:      'secondary',
        fontSize:   50,
        marginLeft: '78%',
    },
};

class MainContainer extends Component {

    render () {
        const { classes, addNewUser } = this.props;

        return (
            <div>
                <UsersList />
                <AddCircleIcon
                    className = { classes.add }
                    onClick = { addNewUser }
                    color = 'secondary'
                />
            </div>

        );
    }
}

export default compose(
    withStyles(styles),
    connect(null, { addNewUser })
)(MainContainer);
