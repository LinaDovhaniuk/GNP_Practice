import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SchoolIcon from '@material-ui/icons/School';
import { AccountCircle } from '@material-ui/icons';

import { getAllUniversities, getUsers } from '../redux/actions';

const styles = {
    container: {
        minWidth:       160,
        margin:         10,
        display:        'flex',
        justifyContent: 'space-around',
        flexDirection:  'column',
        alignItems:     'center',
    },
    item: {
        margin: 8,
        width:  '100%',
    },
    actions: {
        display:       'flex',
        flexDirection: 'row',
    },
    btn: {
        margin:         3,
        textDecoration: 'none',
        color:          'white',
        fontSize: 20,
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 2,
    },
    title: {
        flexGrow: 1,
    },
    avatar: {
        fontSize: 40,
    },
};


class Navigation extends Component {

    onUniversitiesBtnClick = (user) => {
        const { getAllUniversities, getUsers } = this.props;
        getAllUniversities(user.token);
        getUsers(user);
    };


    render () {
        const { user = {}, classes } = this.props;
        const { auth = false } = user;


        return (
            <div className = { classes.root }>
                <AppBar position = 'static'>
                    <Toolbar>
                        <NavLink to = '/about' className={classes.btn}><SchoolIcon /></NavLink>
                        <Typography className = { classes.title } variant = 'h6'>
                            Welcome to Сampus
                        </Typography>
                        {auth ? (
                            <Fragment>
                                <NavLink className = { classes.btn } to = '/universities'>
                                    <Button
                                        color = 'inherit'
                                        onClick = { this.onUniversitiesBtnClick(user) }>

                                        <Typography className = { classes.title }>
                                            Universities
                                        </Typography>
                                    </Button>
                                </NavLink>
                                <NavLink className = { classes.btn } to = '/home'>
                                    <AccountCircle className = { classes.avatar } />
                                </NavLink>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <NavLink className = { classes.btn } to = '/login'><Button color = 'inherit'>Login</Button></NavLink>
                                <NavLink className = { classes.btn } to = '/register'><Button color = 'inherit'>Create an account</Button></NavLink>
                            </Fragment>)}

                    </Toolbar>
                </AppBar>
            </div>
        );

    }
}

const mapStateToProps = ({ usersData: { user }}) => ({
    user,
});

export default withRouter(
    compose(
        withStyles(styles),
        connect(mapStateToProps, { getAllUniversities, getUsers })
    )(Navigation));
