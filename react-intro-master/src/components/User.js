import React, { Component, Fragment } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import withStyles from '@material-ui/core/styles/withStyles';
import EditUser from './EditUser';
import { connect } from "react-redux";
import { compose } from "redux";
import {addUser, cancelEditMode, deleteUser, editUser} from "../redux/actions";

const colors = [
    '#ef5350', '#ab47bc', '#7e57c2', '#5c6bc0', '#42a5f5',
    '#26a69a', '#4caf50', '#fbc02d', '#ef6c00', '#e65100',
    '#c2185b', '#c51162', '#aa00ff', '#3f51b5', '#311b92',
    '#2962ff', '#00838f', '#1de9b6', '#ffc107', '#03a9f4'];

const styles = {
    avatar: {
        width:    '12vw',
        height:   '12vw',
        opacity:  0.8,
        color:    'white',
        fontSize: '3vw',
        minWidth: '69px',
    },
    mainBox: {
        width:  '60%',
        margin: 10,
    },
    card: {
        minWidth:       457,
        width:          '100%',
        display:        'flex',
        flexDirection:  'row',
        justifyContent: 'space-between',
        alignItems:     'flex-start',
        padding:        15,
        fontSize:       20,
    },
    info: {
        display:        'flex',
        justifyContent: 'space-around',
        flexDirection:  'column',
        width:          '50%',
        minWidth:       '160px',
        '& > *':        {
            textOverflow: 'ellipsis',
            overflow:     'hidden',
        },
    },
    content: {
        lineHeight: '3.5vw',
        fontSize:   '2vw',
    },
    dateContent: {
        lineHeight: '3.5vw',
        fontSize:   '1.8vw',
    },
    icons: {
        height: '2.5vw',
    },
};

class User extends Component {
    constructor (props) {
        super(props);
        const { editMode = false } = props;
        this.state = { editMode };
    }

    getAbbreviation = (user) => `${user.name.charAt(0)}${user.surname.charAt(0)}`;

    onEditIconClick = () => {
        this.setState({ editMode: true });
    };

    onSave = (user) => {
        this.setState({
            editMode: false,
        });
        user.addMode ? this.props.addUser(user) : this.props.editUser({
            ...user,
        });
    };

    onCancel = (user) => {
        this.setState({ editMode: false });
        this.props.cancelEditMode();

    };

    render () {
        const { user, deleteUser, classes } = this.props;
        const { id, name, surname, email, birthDate } = user;
        const { editMode } = this.state;
        const ab = this.getAbbreviation(user);

        return (
            <Box className = { classes.mainBox }>
                <Card className = { classes.card }>
                    <Avatar
                        className = { classes.avatar }
                        src = 'public/images/avatar-person.jpeg'
                        style = { { backgroundColor: colors[Math.floor(Math.random() * Math.floor(colors.length))] } }>
                        {ab === '' ?
                            undefined
                            : ab
                        }
                    </Avatar>
                    <CardContent className = { classes.info }>
                        {editMode ? (
                            <EditUser
                                onCancel = { this.onCancel }
                                onSave = { this.onSave }
                                user = { user }
                            />
                        ) : (
                            <Fragment>
                                <Typography className = { classes.content } variant = 'h4' >{`${name} ${surname}`}</Typography>
                                <Typography className = { classes.content } variant = 'h5' >{email}</Typography>
                                <Typography className = { classes.dateContent } variant = 'h6' >{birthDate}</Typography>
                            </Fragment>
                        )}
                    </CardContent>
                    <CardActions>
                        <EditIcon
                            color = 'primary'
                            onClick = { this.onEditIconClick }
                            className = { classes.icons }
                        />
                        <DeleteForeverIcon
                            className = { `${classes.delete} ${classes.icons}` }
                            color = 'secondary'
                            onClick = { () => {
                                deleteUser(id);
                            } }
                        />
                    </CardActions>
                </Card>
            </Box>
        );
    }
}

export default compose(
    withStyles(styles),
    connect(null, { editUser, deleteUser, addUser, cancelEditMode })
)(User);
