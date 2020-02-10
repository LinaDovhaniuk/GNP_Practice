import React, { Component, Fragment } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

import EditIcon from '@material-ui/icons/Edit';
import withStyles from '@material-ui/core/styles/withStyles';
import EditUser from '../components/EditUser';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { cancelEditMode, editUser } from '../redux/actions';
import { withRouter } from 'react-router-dom';


const colors = [
    '#ef5350', '#ab47bc', '#7e57c2', '#5c6bc0', '#42a5f5',
    '#26a69a', '#4caf50', '#fbc02d', '#ef6c00', '#e65100',
    '#c2185b', '#c51162', '#aa00ff', '#3f51b5', '#311b92',
    '#2962ff', '#00838f', '#1de9b6', '#ffc107', '#03a9f4'];

const styles = {

    mainBox: {
        display:        'flex',
        justifyContent: 'center',
        flexDirection:  'column',
        alignItems:     'center',
    },
    card: {
        width: '80%',
    },
    mainInfoBlock: {
        display:        'flex',
        justifyContent: 'space-evenly',
        flexDirection:  'row',
        alignItems:     'center',
    },
    mainInfo: {
        display:        'flex',
        justifyContent: 'center',
        flexDirection:  'column',
        alignItems:     'center',
        padding:        50,
    },
    info: {
        display:        'flex',
        justifyContent: 'center',
        alignItems:     'center',
        flexDirection:  'column',
        textAlign:      'center',
        paddingRight:   '45px',
        paddingLeft:    '45px',
        fontSize:       25,
        '& > *':        {
            textOverflow: 'ellipsis',
            overflow:     'hidden',
        },
    },
    hr: {
        width: '50%',
        color: '#311B92',
    },
    btn: {
        width:          '60%',
        display:        'flex',
        justifyContent: 'right',
        fontSize:       '3vw',
        textDecoration: 'none',
    },
    arrow: {
        display:         'flex',
        justifyContent:  'center',
        alignItems:      'center',
        color:           'white',
        width:           40,
        height:          40,
        borderRadius:    '50%',
        backgroundColor: '#f50057',
        '& > img':       {
            height:     10,
            fontWeight: 'bold',
        },
    },
    avatar: {
        width:          '130px',
        height:         '130px',
        opacity:        0.8,
        color:          'white',
        borderRadius:   '50%',
        display:        'flex',
        justifyContent: 'center',
        alignItems:     'center',
        fontSize: 25,
        '& > *':        {
            fontSize: 60,
        },
    },

    content: {
        lineHeight:     2,
        fontSize:       25,
        textDecoration: 'none',
    },
    icons: {
        height: '25px',
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
        this.props.editUser({
            ...user,
        });
    };

    onCancel = (user) => {
        this.setState({ editMode: false });
        this.props.cancelEditMode();

    };

    render () {
        const { user, classes } = this.props;
        const { id, name, surname, email } = user;
        const { editMode } = this.state;
        const ab = this.getAbbreviation(user);

        return (
            <Box className = { classes.mainBox }>
                <Card className = { classes.card }>
                    <Box className = { classes.mainInfoBlock }>
                        <Avatar
                            className = { classes.avatar }
                            src = 'public/images/avatar-person.jpeg'
                            style = { { backgroundColor: colors[Math.floor(Math.random() * Math.floor(colors.length))] } }>
                            {ab === '' ?
                                undefined
                                : ab
                            }
                        </Avatar>
                        <Box className = { classes.mainInfo }>
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
                                </Fragment>


                            )}
                        </Box>
                        <CardActions>
                            <EditIcon
                                color = 'primary'
                                onClick = { this.onEditIconClick }
                                className = { classes.icons }
                            />
                        </CardActions>
                    </Box>

                    <CardContent>
                        <Box className = { classes.info }>
                            <h3>Your achievements</h3>
                            <hr className = { classes.hr } />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        );
    }
}

export default withRouter(
    compose(
        withStyles(styles),
        connect(null,
            { editUser, cancelEditMode }
        )
    )(User));
