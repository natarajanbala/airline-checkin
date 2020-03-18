import initialState from "./initialState";
import deepFreeze from 'deep-freeze';
import * as types from "../actions/actionTypes";

export default function searchFlightsReducer(state = initialState, action) {
    deepFreeze(state);
    switch (action.type) {
        case types.SEARCH_FLIGHTS_SUCCESS: {
            return {
                ...state,
                flights: action.flights
            };
        }
        case types.SELECT_FLIGHT: {
            let selectedFlight = state.flights.find((f) => action.option.value === f.flightNo);
            let seat;
            if (action.seats && action.seats.length > 0) {
                seat = action.seats[0].data;
            }
            selectedFlight = {
                ...selectedFlight,
                passengers: action.passengers,
                seats: seat
            };
			return {
                ...state,
                selectedFlight
            };
        }
        default: 
        return state; 
    }
}