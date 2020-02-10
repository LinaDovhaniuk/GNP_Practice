import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { history } from '../redux/store';
import { compose } from 'redux';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';

import { authUser, authUserSuccess } from '../redux/actions';


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
        margin: 3,
    },
};


class Login extends Component {
    onSubmit = (values) => {
        const { authUser, authUserSuccess } = this.props;
        authUser(values);
        const { payload } = authUserSuccess(values);
        payload ? history.replace(`/home`): console.log('Error');
    };

    render () {
        const { classes } = this.props;

        return (
            <Form
                onSubmit = { this.onSubmit }
                render = { ({ handleSubmit }) => (
                    <form className = { classes.container } onSubmit = { handleSubmit }>
                        <Field name = 'email'>
                            {({ input, meta }) => (
                                <TextField
                                    className = { classes.item }
                                    placeholder = 'Email'
                                    required
                                    variant = 'outlined'
                                    { ...input }
                                />
                            )}
                        </Field>
                        <Field name = 'password'>
                            {({ input, meta }) => (
                                <TextField
                                    className = { classes.item }
                                    name = 'password'
                                    placeholder = 'Password'
                                    required
                                    type = 'password'
                                    variant = 'outlined'
                                    { ...input }
                                />
                            )}
                        </Field>

                        <Box className = { classes.actions }>
                            <Button
                                className = { classes.btn }
                                color = 'primary'
                                type = 'submit'
                                variant = 'contained' >
                                Save
                            </Button>
                        </Box>
                    </form>
                ) }
            />
        );

    }
}

export default withRouter(compose(
    withStyles(styles),
    connect(null, { authUser, authUserSuccess })
)(Login));
