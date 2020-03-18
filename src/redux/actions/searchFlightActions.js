import * as airlineApi from '../../api/airlineApi';
import * as airlineSer from '../../api/airlineService';
import axios from 'axios';
const baseUrl = process.env.API_URL;
import * as types from './actionTypes';

export function loadFlights() {
	return function(dispatch) {
		return axios
			.get(`${baseUrl}/flights/`)
			.then((res) => {
				dispatch(loadFlightsSuccess(res.data));
			})
			.catch((err) => {
				console.log('load flights error', err);
			});
	};
}

export function loadFlightsSuccess(flights) {
	return {
		type: types.SEARCH_FLIGHTS_SUCCESS,
		flights
	};
}

export function setSelectedFlight(option, passengers, seats) {
	return {
		type: types.SELECT_FLIGHT,
		option,
		passengers,
		seats
	};
}

export function selectFlight(option) {
	return function(dispatch) {
		return axios.all([ 
			axios.get(`${baseUrl}/passengers/`),
			axios.get(`${baseUrl}/seats/`) 
		])
		.then((resArr) => {
			const passList = resArr[0].data;
			const seatList = resArr[1].data;
			const fPassengers = passList.filter((p) => {
				return option.value === p.flightNo;
			});
			const fSeat = seatList.filter((s) => {
				return option.value === s.flightNo;
			});
			dispatch(setSelectedFlight(option, fPassengers, fSeat));
		});
	};
}

// export function selectFlight(option) {
// 	return function(dispatch) {
// 		return airlineApi
// 			.getPassengersApi()
// 			.then((passengers) => {
// 				const fPassengers = passengers.filter((p) => {
// 					return option.value === p.flightNo;
// 				});
// 				console.log('fPassengers -- ', fPassengers);
// 				dispatch(setSelectedFlight(option, fPassengers));
// 				dispatch(fetchSeats(option.value));
// 				//dispatch(selectFlightSuccess(fPassengers));
// 			})
// 			.catch((error) => {
// 				console.log('load passengers error');
// 			});
// 	};
// }

export function fetchSeats(flightNo) {
	return function(dispatch) {
		return airlineApi
			.getSeatsApi(flightNo)
			.then((seats) => {
				dispatch(fetchSeatsSuccess(seats));
			})
			.catch((error) => {
				console.log('load flights error');
			});
	};
}

export function fetchSeatsSuccess(seats) {
	return {
		type: types.FETCH_SEATS_SUCCESS,
		seats
	};
}

// export function selectFlightSuccess(passengers) {
// 	return {
// 		type: types.SELECT_FLIGHT_SUCCESS,
// 		passengers
// 	};
// }

// export function loadFlights() {
// 	return function(dispatch) {
// 		return airlineApi
// 			.getFlightList()
// 			.then((flights) => {
// 				dispatch(loadFlightsSuccess(flights));
// 			})
// 			.catch((error) => {
// 				console.log('load flights error');
// 			});
// 	};
// }
