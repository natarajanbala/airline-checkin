import React, { useState } from 'react';
import { Button, Box, Grid, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ModalWrapper from './Modal/ModalWrapper';
import PassengerInfo from './PassengerInfo';
import PropTypes from 'prop-types';

  
const CheckInModal = (props) => {
	if (!props.open) {
		return null;
	}
	
	const [ passengerToCheckIn, setPassengerToCheckIn ] = useState(props.passengerAlloted);
	const actionType = props.passengerAlloted ? 'UNDO CHECK-IN' :'CHECK-IN';
	let modalTitle = '';

	if (props.seat) {
		if(actionType === 'UNDO CHECK-IN') {
			modalTitle = `Undo Check-In Passenger - Seat ${props.seat}`;
		} else {
			modalTitle = `Check-In Passenger - Seat ${props.seat}`;
		}
	}

	const handleCheckIn = () => {		
		props.toggleModal(false);
		props.checkIn(actionType, passengerToCheckIn, props.seat);		
	};

	const loadPassengerDetail = (event, newValue) => {
		setPassengerToCheckIn(newValue);
	};

	return (
		<ModalWrapper modalTitle={modalTitle} width='60%' open={props.open} toggleModal={props.toggleModal}>
			<Grid container spacing={2}>
				{
					(actionType !== 'UNDO CHECK-IN') &&
					<Grid item xs={9}>
						<Autocomplete
							options={props.selectedFlight.passengers}
							onChange={loadPassengerDetail}
							getOptionLabel={(option) => option.passengerName}
							style={{ width: 300 }}
							renderInput={(params) => <TextField {...params} label="Select passenger" variant="outlined" />}
						/>
					</Grid>
				}
				{passengerToCheckIn && <PassengerInfo passenger={passengerToCheckIn} />}
				<Grid item xs={9}>
					<Box component="span" mr={2}>
						<Button onClick={() => handleCheckIn()} variant="contained" color="primary">
							{actionType}
						</Button>
					</Box>
					<Box component="span">
						<Button onClick={() => props.toggleModal(false)} variant="outlined">
							Cancel
						</Button>
					</Box>
				</Grid>
			</Grid>
		</ModalWrapper>
	);
};

CheckInModal.propTypes = {};

export default CheckInModal;
