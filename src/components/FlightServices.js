import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

const FlightServices = ({ flight, history }) => {
    
    const goToCheckin = () => {
        history.push('/checkin');
    }

	return (
		<div className="container">
			<div className="row">
				<div className="col">{flight.flightName}</div>
				<div className="col">{flight.flightNo}</div>
			</div>
			<div className="row">
				<div className="col">{flight.source}</div>
				<div className="col">{flight.destination}</div>
			</div>
			<div className="row">
				<div className="col">
					<label>Arrival: </label>
					{flight.arrivalTime}
				</div>
				<div className="col">
					<label>Departure: </label>
					{flight.departureTime}
				</div>
			</div>
			<div className="row">
				<div className="col">
					<button type="button" onClick={goToCheckin} className="btn btn-outline-primary btn-lg">
						CHECK-IN SERVICES
					</button>
				</div>
				<div className="col">
					<button type="button" className="btn btn-outline-primary btn-lg">
						IN-FLIGHT SERVICES
					</button>
				</div>
			</div>
		</div>
	);
};

FlightServices.propTypes = {
    flight: PropTypes.object.isRequired,
    history: PropTypes.object
};

export default withRouter(FlightServices);
