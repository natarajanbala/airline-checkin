import * as airlineApi from '../../api/airlineApi';
import axios from 'axios';
const baseUrl = process.env.API_URL;
import * as types from './actionTypes';
import { push } from 'react-router-redux'

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

export function setSelectedFlight(selectedFlightNo, passengers, seats) {
	return {
		type: types.SELECT_FLIGHT,
		selectedFlightNo,
		passengers,
		seats
	};
}

export function selectFlight(selectedFlightNo) {
	return function(dispatch) {
		return axios.all([ 
			axios.get(`${baseUrl}/passengers/`),
			axios.get(`${baseUrl}/seats/`) 
		])
		.then((resArr) => {
			const passList = resArr[0].data;
			const seatList = resArr[1].data;
			const fPassengers = passList.filter((p) => {
				return selectedFlightNo === p.flightNo;
			});
			const fSeat = seatList.filter((s) => {
				return selectedFlightNo === s.flightNo;
			});
			dispatch(setSelectedFlight(selectedFlightNo, fPassengers, fSeat));
			
		})
		.then(() => {
			console.log('then 2');
			//dispatch(push('/checkin'));
		});
	};
}

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
