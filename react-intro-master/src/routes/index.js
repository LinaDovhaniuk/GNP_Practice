// Core
import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// Components
import MainContainer from '../containers/MainContainer';
import User from '../components/User';
import { compose } from 'redux';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { addNewUser } from '../redux/actions';
import EditUser from '../components/EditUser';
import UsersPage from '../components/UsersPage';

class Routes extends Component {
    render () {
        const { users } = this.props;

        return (
            <Fragment>
                <Switch>
                    <Route exact component = { MainContainer } path = '/users' />
                    {/*<Route render = { ({match}) => <AddUser match = {match} users = {users} />} path = '/user/:id' />*/}
                    <Route
                        path = '/user/:id' render = { ({ match }) => (<UsersPage
                            match = { match }
                            users = { users }
                        />) }
                    />

                    <Redirect push to = '/users' />
                </Switch>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ users }) => ({
    users: users.newUser ? [...users.data, users.newUser] : users.data,
});

export default withRouter(
    compose(
        // withStyles(styles),
        connect(mapStateToProps)
    )(Routes));
