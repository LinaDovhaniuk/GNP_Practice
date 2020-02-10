import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Field, Form } from 'react-final-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';

import { history } from '../redux/store';
import { registerUser, registerUserSuccess } from '../redux/actions';

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

class Registration extends Component {
    constructor (props) {
        super(props);
        const { user } = props;
        this.state = { ...user };
    }

    handleNameChange = ({ target: { value }}) => {
        this.setState({
            name: value,
        });
    };

    isNameValid = (name) => (/^[a-zA-Z]+$/).test(name);

    handleSurnameChange = ({ target: { value }}) => {
        this.setState({
            surname: value,
        });
    };

    isSurnameValid = (surname) => (/^[a-zA-Z]+$/).test(surname);

    handleEmailChange = ({ target: { value }}) => {
        this.setState({
            email: value,
        });
    };

    isEmailValid = (email) => (/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/).test(email);

    handleBirthDateChange = ({ target: { value }}) => {
        this.setState({
            birthDate: value,
        });
    };

    isDisabled = () => !(this.isNameValid(this.state.name) &&
        this.isSurnameValid(this.state.surname) &&
        this.isEmailValid(this.state.email)
    );


    isBirthDateValid = (birthDate) => (/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/).test(birthDate);

    onSubmit = (values) => {
        const { registerUser, registerUserSuccess } = this.props;
        registerUser(values);
        registerUserSuccess ? history.replace('/home'): console.log('Error');
    };

    render () {
        const { classes, registerUserSuccess } = this.props;

        return (
            <Form
                onSubmit = { this.onSubmit }
                render = { ({ handleSubmit }) => (
                    <form className = { classes.container } onSubmit = { handleSubmit }>
                        <Field name = 'name'>
                            {({ input, meta }) => (
                                <TextField
                                    className = { classes.item }
                                    placeholder = 'Name'
                                    required
                                    variant = 'outlined'
                                    { ...input }
                                />
                            )}
                        </Field>
                        <Field name = 'surname'>
                            {({ input, meta }) => (
                                <TextField
                                    className = { classes.item }
                                    name = 'surname'
                                    placeholder = 'Surname'
                                    required
                                    variant = 'outlined'
                                    { ...input }
                                />
                            )}
                        </Field>
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
                                    placeholder = 'password'
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
    connect(null, { registerUser, registerUserSuccess })
)(Registration));
