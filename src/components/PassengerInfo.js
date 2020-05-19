import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Grid, Typography, TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBabyCarriage, faWheelchair } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
	ancServcsOutline: {
		display: 'block',
		border: '1px dotted grey',
		borderRadius: '5px',
		padding: '10px',
		width: 'fit-content'
	}
  }));

const PassengerInfo = props => {
    const classes = useStyles();  
    return (
        <>
            <Grid item xs={9}>
                <Typography variant="h4">
                { props.passenger.passengerName } { ` `}
                { props.passenger.isPhysChallenged 
                ? 
                <FontAwesomeIcon icon={faWheelchair} style={{ color: '#f50057' }} />
                : props.passenger.isCarryingInfant 
                    ? <FontAwesomeIcon icon={faBabyCarriage} style={{ color: '#f50057' }} />
                    : ''
                }
                </Typography>
            </Grid>
            <Grid item xs={9}>
                <Typography variant="body2" component={'span'} color="textSecondary">
                    <div className={classes.ancServcsOutline}>
                    {props.passenger.ancillaryServices.map(s => {
                        return <Box key={s}>{s}</Box>
                    })}
                    </div>
                </Typography>
            </Grid>
        </>
    );
};

PassengerInfo.propTypes = {
    
};

export default PassengerInfo;