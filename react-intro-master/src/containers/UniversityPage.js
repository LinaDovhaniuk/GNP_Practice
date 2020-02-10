import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, withRouter } from 'react-router-dom';
import { createSelector } from 'reselect';

import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Typography from '@material-ui/core/Typography';

import { addUserToUniversity } from '../redux/actions';
import Student from '../components/Student';


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
        justifyContent: 'center',
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
        flexDirection:  'column',
        alignItems:     'center',
        fontSize:       25,
        textAlign:      'center',
        paddingRight:   '45px',
        paddingLeft:    '45px',
    },
    hr: {
        width: '50%',
        color: '#311B92',
    },
    students: {
        paddingBottom: 10,
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
        width:          '100px',
        height:         '100px',
        opacity:        0.8,
        color:          'white',
        minWidth:       '69px',
        borderRadius:   '50%',
        display:        'flex',
        justifyContent: 'center',
        alignItems:     'center',
        '& > *':        {
            fontSize: 50,
        },
    },

};

class UniversityPage extends Component {
    constructor (props) {
        super(props);
    }

    onAddUserClick = (university, user) => () => {
        this.props.addUserToUniversity(university, user);
    };

    render () {
        const { university, classes, universitiesUsers, freeUsers, user } = this.props;
        const { name, city } = university;
        const btnDisabled = user.university === university.id;

        return (
            <Box className = { classes.mainBox }>
                <Card className = { classes.card }>
                    <Box className = { classes.mainInfoBlock }>
                        <Box
                            className = { classes.avatar }
                            style = { { backgroundColor: colors[Math.floor(Math.random() * Math.floor(colors.length))] } }>
                            <AccountBalanceIcon />
                        </Box>
                        <Box className = { classes.mainInfo }>
                            <Typography className = { classes.content } variant = 'h4' >{name}</Typography>
                            <Typography className = { classes.content } variant = 'h5' >{city}</Typography>
                        </Box>
                    </Box>

                    <CardContent>
                        <Box className = { classes.info }>
                            <h3>About us</h3>
                            <hr className = { classes.hr } />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            <p>Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Box>

                        <Box className = { classes.info }>
                            <h3>Our students</h3>
                            <hr className = { classes.hr } />
                            <Box className = { classes.students }>
                                {universitiesUsers.map((u) => <Student key = { u.id } user = { u } />)}
                                <Button
                                    disabled = { !btnDisabled }
                                    onClick = { this.onAddUserClick(university, user) }
                                    color = 'primary'
                                    variant = 'contained'>
                                Join students
                                </Button>
                                {/*{ btnDisabled ?*/}
                                {/*(<Button*/}
                                {/*disabled = { btnDisabled }*/}
                                {/*onClick = { this.onAddUserClick(university, user) }*/}
                                {/*color = 'primary'*/}
                                {/*variant = 'contained'>*/}
                                {/*You are already our student</Button>*/}
                                {/*) : (*/}
                                {/*<Button*/}
                                {/*disabled = { !btnDisabled }*/}
                                {/*onClick = { this.onAddUserClick(university, user) }*/}
                                {/*color = 'primary'*/}
                                {/*variant = 'contained'>*/}
                                {/*Join students</Button>*/}
                                {/*)}*/}
                            </Box>
                        </Box>
                        <Box className = { classes.info }>
                            <h3>Looking forward to submitting documents</h3>
                            <hr className = { classes.hr } />
                            <Box className = { classes.students }>
                                {freeUsers.map((u) => <Student key = { u.id } user = { u } />)}
                            </Box>
                        </Box>
                        <Box className = { classes.btn }>
                            <NavLink className = { classes.arrow } to = '/universities'><ArrowBackIcon /></NavLink>
                        </Box>
                    </CardContent>
                </Card>
            </Box>


        );
    }
}

const getUniversityId = (state, props) => props.match.params.id;

const getUniversities = (state, props) => state.universitiesData.universities;

const getUniversityById = createSelector(
    [getUniversities, getUniversityId],
    (universities, uniId) =>
        universities.find((u) => u.id.toString() === uniId.toString())
);

const getAllUsers = (state, props) => state.universitiesData.users;


const getUniversitiesUsers = createSelector(
    [getAllUsers, getUniversityId],
    (users, uniId) =>
        users.filter((u) => u.university === uniId)
);

const getFreeUsers = createSelector(
    [getAllUsers, getUniversityById],
    (users, uniId) =>
        users.filter((u) => u.university === undefined)
);


const mapStateToProps = (state, props) => ({
    university:        getUniversityById(state, props),
    universitiesUsers: getUniversitiesUsers(state, props),
    freeUsers:         getFreeUsers(state, props),
    user:              state.usersData.user,
});

export default withRouter(
    compose(
        withStyles(styles),
        connect(mapStateToProps, { addUserToUniversity })
    )(UniversityPage));
