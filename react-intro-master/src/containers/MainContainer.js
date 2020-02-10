import { Component } from 'react';
import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addNewUser } from '../redux/actions';
import { Switch, withRouter } from 'react-router-dom';

const styles = {
    add: {
        color:      'secondary',
        fontSize:   50,
        marginLeft: '78%',
    },
};

class MainContainer extends Component {

    render () {
        const { classes } = this.props;

        return (
            <div>
                {/*<UsersList />*/}
                <AddCircleIcon
                    className = { classes.add }
                    // onClick = { addNewUser }
                    color = 'secondary'
                />
            </div>

        );
    }
}

export default withRouter(
    compose(
        withStyles(styles),
        connect(null)
    )(MainContainer));
