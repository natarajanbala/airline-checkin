import React, { useState} from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl, Box, Button } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import PropTypes from 'prop-types';

import { loadFlights } from '../redux/actions/searchFlightActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faSearch, faClock } from '@fortawesome/free-solid-svg-icons';
import FlightServices from './FlightServices';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		paddingTop: theme.spacing(4)
	},
	paper: {
		padding: theme.spacing(4),
		width: '100%',
		display: 'inline-block',
		textAlign: 'center',
		flexDirection: 'row',
		color: theme.palette.text.primary
	},
	searchbtn: {
		fontSize: '1.2rem',
		textTransform: 'uppercase'
	},
	flightCard: {
		//margin: '0 10%'
	},
	flightCardPaper: {
		padding: theme.spacing(3),
		width: '100%',
		color: theme.palette.text.primary
	}
}));


const mapStateToProps = ({ searchFlights }) => {
	return {
		flights: searchFlights.flights
	};
};

const mapDispatchToProps = {
	loadFlights
};

const FlightSearch = ({ loadFlights, flights }) => {
	const [ source, setSource ] = useState('blr');
	const [ destination, setDestination ] = useState('all');
	const classes = useStyles();
	const handleSource = (e) => {
		setSource(e.target.value);
	};

	const handleDest = (e) => {
		setDestination(e.target.value);
	};

	const startDate = new Date();
	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<Box component="span" mr={2}>
								<KeyboardDatePicker
									format="MM/dd/yyyy"
									label="Date"
									value={startDate}
									style={{ width: '15vw' }}
									disablePast
									KeyboardButtonProps={{ 'aria-label': 'change date' }}
									keyboardIcon={<FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#f50057' }} />}
								/>
							</Box>
							<Box component="span">
								<KeyboardTimePicker
									clearable
									style={{ width: '12vw' }}
									showTodayButton
									todayLabel="now"
									ampm={false}
									label="Time (IST)"
									value={startDate}
									KeyboardButtonProps={{ 'aria-label': 'change time' }}
									keyboardIcon={<FontAwesomeIcon icon={faClock} style={{ color: '#f50057' }} />}
									//onChange={handleDateChange}
								/>
							</Box>
						</MuiPickersUtilsProvider>
					</Grid>
					<Grid item xs={12}>
						<Box component="span" mr={2}>
							<FormControl>
								<InputLabel id="al-src-lbl">Source</InputLabel>
								<Select
									labelId="al-src-lbl"
									value={source}
									onChange={handleSource}
									style={{ width: '15vw' }}
								>
									{[ { label: 'BLR', value: 'blr' } ].map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box>
						<Box component="span">
							<FormControl>
								<InputLabel id="al-dest-lbl">Destination</InputLabel>
								<Select
									labelId="al-dest-lbl"
									value={destination}
									onChange={handleDest}
									style={{ width: '15vw' }}
								>
									{[
										{ label: 'BOM', value: 'bom' },
										{ label: 'DEL', value: 'del' },
										{ label: 'All', value: 'all' }
									].map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<Button
							className={classes.searchbtn}
							variant="contained"
							color="primary"
							onClick={loadFlights}
							endIcon={<FontAwesomeIcon icon={faSearch} />}
						>
							Search Flights
						</Button>
					</Grid>
				</Grid>
			</Paper>
			<Grid className={classes.root} container spacing={4}>
				{flights &&
					flights.length > 0 &&
					flights.map((f) => (
						<Grid item key={f.id} xs={12} sm={6}>
							<Paper className={classes.flightCardPaper}>
								<FlightServices flight={f} />
							</Paper>
						</Grid>
					))}
			</Grid>
		</div>
	);
};

FlightSearch.propTypes = {
	flights: PropTypes.array,
	loadFlights: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightSearch);
