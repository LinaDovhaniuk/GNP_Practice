import users from '../data/users';
import { Component } from 'react';
import UsersList from '../components/UsersList';
import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const styles = {
    add: {
        color:      'secondary',
        fontSize:   50,
        marginLeft: '78%',
    },
};

class MainContainer extends Component {
    state = { users };

    deleteUser = (id) => {
        const { users } = this.state;
        this.setState({ users: users.filter((user) => user.id !== id) });
    };

    addUser = () => {
        const { users } = this.state;
        const newUser = {
            id:        Math.random()*1000,
            name:      '',
            surname:   '',
            email:     '',
            birthDate: '',
            editMode:  true,
        };
        this.setState({ users: [...users, newUser]});
    };

    editUser = (user) => {
        const { users } = this.state;

        const indexOfChangedItem = users.findIndex((u) => u.id === user.id);

        if (indexOfChangedItem >= 0) {
            const updateUsers = [
                ...users.slice(0, indexOfChangedItem),
                user,
                ...users.slice(indexOfChangedItem + 1)
            ];
            this.setState({ users: updateUsers });
        }
    };

    render () {
        const { users } = this.state;
        const { classes } = this.props;

        return (
            <div>
                <UsersList
                    deleteUser = { this.deleteUser }
                    editUser = { this.editUser }
                    users = { users }
                />
                <AddCircleIcon
                    className = { classes.add }
                    onClick = { this.addUser }
                    color = 'secondary'
                />
            </div>

        );
    }
}

export default withStyles(styles)(MainContainer);
