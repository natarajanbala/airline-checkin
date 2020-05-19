import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faPlaneDeparture, faCalendarAlt, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';

const FlightDetail = ({ flight, lite = false }) => {
  console.log('fh lite -- ', lite);
  return (
    <>
      <Grid item>
        <Typography variant="h3" component="h2">
          {flight.source}
        </Typography>
        {
          !lite && <><Typography variant="body2" color="textSecondary">
            ({flight.sourceFullName})
          </Typography>
            <Typography variant="body1">
              <FontAwesomeIcon icon={faPlaneDeparture} style={{ color: '#f50057' }} /> {flight.srcDepartureTime}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#f50057' }} /> {flight.srcDepartureDate}
            </Typography></>
        }
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h2">
          <FontAwesomeIcon icon={faPlane} style={{ color: '#3f51b5' }} />
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h2">
          {flight.destination}
        </Typography>
        {
          !lite && <><Typography variant="body2" color="textSecondary">
              ({flight.destFullName})
            </Typography>
            <Typography variant="body1">
              <FontAwesomeIcon icon={faPlaneArrival} style={{ color: '#f50057' }} /> {flight.destArrivalTime}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#f50057' }} /> {flight.destArrivalDate}
            </Typography></>
        }
      </Grid>
    </>
  );
};

FlightDetail.propTypes = {

};

export default FlightDetail;