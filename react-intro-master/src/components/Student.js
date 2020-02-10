import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import withStyles from '@material-ui/core/styles/withStyles';


const colors = [
    '#ef5350', '#ab47bc', '#7e57c2', '#5c6bc0', '#42a5f5',
    '#26a69a', '#4caf50', '#fbc02d', '#ef6c00', '#e65100',
    '#c2185b', '#c51162', '#aa00ff', '#3f51b5', '#311b92',
    '#2962ff', '#00838f', '#1de9b6', '#ffc107', '#03a9f4'];

const styles = {
    avatar: {
        width:    75,
        height:   75,
        opacity:  0.8,
        color:    'white',
        fontSize: 20,
    },
    mainBox: {
        width:  '100%',
        margin: 10,
    },
    card: {
        width:          '100%',
        display:        'flex',
        flexDirection:  'row',
        justifyContent: 'flex-start',
        padding:        10,
        fontSize:       18,
    },
    info: {
        display:        'flex',
        justifyContent: 'space-around',
        flexDirection:  'column',
        width:          '100%',
        '& > *':        {
            textOverflow: 'ellipsis',
            overflow:     'hidden',
        },
    },
    content: {
        lineHeight:     '25px',
        textDecoration: 'none',
    },

};

class Student extends Component {

    getAbbreviation = (user) => `${user.name.charAt(0)}${user.surname.charAt(0)}`;

    render () {
        const { user, classes } = this.props;
        const { name, surname, email } = user;
        const ab = this.getAbbreviation(user);

        return (
            <Box className = { classes.mainBox }>
                <Card className = { classes.card }>
                    <Avatar
                        className = { classes.avatar }
                        style = { { backgroundColor: colors[Math.floor(Math.random() * Math.floor(colors.length))] } }>
                        {ab === '' ?
                            undefined
                            : ab
                        }
                    </Avatar>
                    <CardContent className = { classes.info }>

                        <Fragment>
                            <Typography className = { classes.content } variant = 'h6' >{`${name} ${surname}`}</Typography>
                            <Typography className = { classes.content } variant = 'h6' >{email}</Typography>
                        </Fragment>

                    </CardContent>
                </Card>
            </Box>
        );
    }
}

export default withRouter(
    compose(
        withStyles(styles),
    )(Student));
