import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';

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

class EditUser extends Component {
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

    isDisabled = () => !(this.isNameValid(this.state.name) &&
        this.isSurnameValid(this.state.surname) &&
        this.isEmailValid(this.state.email)
    );


    isBirthDateValid = (birthDate) => (/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/).test(birthDate);

    render () {
        const { user, classes, onSave, onCancel } = this.props;
        const { id, name, surname, email, birthDate } = user;

        return (
            <form className = { classes.container } >
                <TextField
                    className = { classes.item }
                    defaultValue = { name }
                    error = { !this.isNameValid(this.state.name) }
                    label = 'Name'
                    onChange = { this.handleNameChange }
                    required
                    variant = 'outlined'
                />
                <TextField
                    className = { classes.item }
                    defaultValue = { surname }
                    error = { !this.isSurnameValid(this.state.surname) }
                    label = 'Surname'
                    onChange = { this.handleSurnameChange }
                    required
                    variant = 'outlined'
                />
                <TextField
                    className = { classes.item }
                    defaultValue = { email }
                    error = { !this.isEmailValid(this.state.email) }
                    label = 'Email'
                    onChange = { this.handleEmailChange }
                    variant = 'outlined'
                />
                <Box className = { classes.actions }>
                    <Button
                        className = { classes.btn }
                        onClick = { () => onCancel(this.state) }
                        variant = 'contained' >
                        Cancel
                    </Button>
                    <Button
                        className = { classes.btn }
                        color = 'primary'
                        disabled = { this.isDisabled() }
                        onClick = { () => onSave(this.state) }
                        variant = 'contained' >
                        Save
                    </Button>
                </Box>
            </form>
        );
    }
}

export default withRouter(withStyles(styles)(EditUser));
