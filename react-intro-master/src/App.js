import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';

import UsersPage from './containers/UsersPage';
import UniversitiesList from './containers/UniversitiesList';
import UniversityPage from './containers/UniversityPage';
import Login from './components/Login';
import Registration from './components/Registration';
import Navigation from './components/Navigation';
import About from './components/About';


const styles = {};

class App extends Component {

    render () {
        const { user = {}} = this.props;
        const { auth = false } = user;
        console.log(user);

        return (
            <Fragment>
                <Navigation />
                {auth ? (
                    <Fragment>
                        <Switch>
                            <Route exact component = { About } path = '/about' />
                            <Route exact component = { UsersPage } path = '/home' />
                            <Route component = { UniversityPage } exact path = '/university/:id' />
                            <Route exact component = { UniversitiesList } path = '/universities' />

                            <Redirect exact push to = '/home' />
                        </Switch>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Switch>
                            <Route exact component = { About } path = '/about' />
                            <Route exact component = { Login } path = '/login' />
                            <Route exact component = { Registration } path = '/register' />

                            <Redirect push to = '/login ' />
                        </Switch>
                    </Fragment>)}
            </Fragment>
        );
    }
}


const mapStateToProps = ({ usersData: { user }}) => ({
    user,
});

export default withRouter(compose(
    withStyles(styles),
    connect(mapStateToProps)
)(App));
