import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const useStyle = {
    container: {
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        margin:         10,
        width:          '60%',
    },
    item: {
        margin: 8,
        width:  '100%',
    },
};

class EditUser extends Component {
    state = {
        id,
        name,
        surname,
        email,
        birthDate,
    };
    handleNameChange = (e, user) => {
        this.setState({
            name: e,
            ...user,
        });
    };
    handleSurnameChange = (e, user) => {
        this.setState({
            surname: e,
            ...user,
        });
    };
    handleEmailChange = (e, user) => {
        this.setState({
            email: e,
            ...user,
        });
    };
    handleBirthDateChange = (e, user) => {
        this.setState({
            birthDate: e,
            ...user,
        });
    };

    render () {
        const {classes } = this.props;

        return (
            <div className = { classes.container } >
                <TextField
                    className = { classes.item }
                    id = 'outlined-helperText'
                    label = 'Name'
                    variant = 'outlined'
                    onChange={this.handleNameChange}
                />
                <TextField
                    className = { classes.item }
                    id = 'outlined-helperText'
                    label = 'Surname'
                    variant = 'outlined'
                    onChange={this.handleSurnameChange}
                />
                <TextField
                    className = { classes.item }
                    id = 'outlined-helperText'
                    label = 'Email'
                    variant = 'outlined'
                    onChange={this.handleEmailChange}
                />
                <TextField
                    className = { classes.item }
                    id = 'outlined-helperText'
                    label = 'BirthDate'
                    variant = 'outlined'
                    onChange={this.handleBirthDateChange}
                />

                {/*submit changes*/}
                <Button
                    onClick = { () => {
                        // return new user
                    } }
                    color = 'primary'
                    variant = 'contained' >Add</Button>
            </div>
        );
    }
}

export default withStyles(useStyle)(EditUser);
