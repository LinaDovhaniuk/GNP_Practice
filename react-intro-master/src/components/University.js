import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUsers } from '../redux/actions';
import { NavLink, withRouter } from 'react-router-dom';

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
        width:    100,
        height:   100,
        opacity:  0.8,
        color:    'white',
        fontSize: 20,
    },
    mainBox: {
        width:  '50%',
        margin: 10,
    },
    card: {
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
        '& > *':        {
            textOverflow: 'ellipsis',
            overflow:     'hidden',
        },
    },
    content: {
        lineHeight:     2,
        fontSize:       20,
        textDecoration: 'none',
    },

};

class University extends Component {
    constructor (props) {
        super(props);
        const { editMode = false } = props;
        this.state = { editMode };
    }

    getAbbreviation = (university) => `${university.name.charAt(0)}`;

    render () {
        const { university, classes, universityPage } = this.props;
        const { id, name, city } = university;
        const ab = this.getAbbreviation(university);


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
                        <Fragment>
                            { universityPage ? (
                                <Fragment>
                                    <Typography className = { classes.content } variant = 'h4' >{`${name}`}</Typography>
                                    <Typography className = { classes.content } variant = 'h5' >{city}</Typography>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Typography className = { classes.content } variant = 'h4' >{`${name}`}</Typography>
                                    <NavLink className = { classes.content } to = { `/university/${id}` }>Read more...</NavLink>
                                </Fragment>

                            )}

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
        connect(null, { getUsers })
    )(University));
