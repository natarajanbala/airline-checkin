import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Box, Divider } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faClock, faPlaneDeparture, faCalendarAlt, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { selectFlight } from '../redux/actions/searchFlightActions';
import FlightHeader from './FlightHeader';
import FlightDetail from './FlightDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  srcDest: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem'
  },
  srvcBtn: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const mapStateToProps = (state) => {
  return {
    selectedFlight: state.searchFlights.selectedFlight
  }
}

const mapDisptachToProps = {
  selectFlight
}

const FlightServices = ({ flight, selectedFlight, selectFlight }) => {
  const classes = useStyles();
  if (selectedFlight !== undefined) {
    return <Redirect to='/checkin'></Redirect>
  }
  const goToCheckin = () => {
    selectFlight(flight.flightNo);
  };
  return (
    <>
      <Grid item className={classes.header} xs>
        <FlightHeader flight={flight} />
      </Grid>
      <Grid item className={classes.srcDest}>
        <FlightDetail flight={flight} />
      </Grid>
      <Divider style={{ margin: '1rem' }} />
      <Grid item className={classes.srvcBtn}>
        <Box component="span" mr={2}>
          <Button variant="outlined" onClick={goToCheckin} size="large" color="primary">
            CHECK-IN
						</Button>
        </Box>
        <Box component="span">
          <Button variant="outlined" size="large" color="primary">
            IN-FLIGHT
						</Button>
        </Box>
      </Grid>
    </>
  );
};

FlightServices.propTypes = {
  flight: PropTypes.object.isRequired,
  history: PropTypes.object
};

export default connect(mapStateToProps, mapDisptachToProps)(FlightServices);
