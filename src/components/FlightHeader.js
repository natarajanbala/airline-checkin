import React from 'react';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const FlightHeader = ({ flight, lite=false }) => {
  return (
    <>
      <Typography
        style={{ width: '50%', letterSpacing: '0.075em', wordWrap: 'break-word' }}
        variant="h6" component="h2">
        {flight.flightName}
      </Typography>
      {
        !lite && <Typography variant="body2" color="textSecondary">
        <FontAwesomeIcon icon={faClock} style={{ color: '#f50057' }} /> departs in 2hrs
      </Typography>
      }
    </>
  );
};

FlightHeader.propTypes = {
  flight: PropTypes.object.isRequired
};

export default FlightHeader;