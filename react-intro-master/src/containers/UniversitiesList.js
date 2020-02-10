import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';

import { getUsers } from '../redux/actions';
import University from '../components/University';


const styles = {
    mainBox: {
        display:        'flex',
        justifyContent: 'center',
        alignItems:     'center',
        flexDirection:  'column',
        fontSize:       20,
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
    card: {
        width:          '80%',
        display:        'flex',
        justifyContent: 'center',
        alignItems:     'center',
        flexDirection:  'column',
    },

};

class UniversitiesList extends Component {

    render () {
        const { universities = [], classes } = this.props;

        return (
            <Box className = { classes.mainBox }>
                <Card className = { classes.card }>
                    <h3>Our Universities</h3>
                    <hr className = { classes.hr } />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat.</p>

                    {universities.map((u) =>
                        (<University
                            key = { u.id }
                            university = { u }
                        />))
                    }
                </Card>
            </Box>
        );
    }

}
const mapStateToProps = ({ universitiesData: { universities }, usersData: { user }}) => ({
    universities,
    user,
});

export default withRouter(compose(
    withStyles(styles),
    connect(mapStateToProps, { getUsers })
)(UniversitiesList));
