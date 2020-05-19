import initialState from "./initialState";
import deepFreeze from 'deep-freeze';
import * as types from "../actions/actionTypes";
import update from 'immutability-helper';

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
            let selectedFlight = state.flights.find((f) => action.selectedFlightNo === f.flightNo);
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
        case types.GRID_SELECTION: {
            let passList = [];
            if (action.selectedItems.length > 0) {
                passList = state.selectedFlight.passengers.filter(p => action.selectedItems.includes(p.id));
            }
            return {
                ...state,
                gridSelection: passList
            }
        }
        case types.SAVE_CHECKIN: {            
            // let index;
            // for (let i = 0; i < state.selectedFlight.passengers.length; i++) {
            //     if(state.selectedFlight.passengers[i].id === action.passengerData.id) {
            //         index = i;
            //         break;
            //     }
            // }
            // return update(state, {
            //     selectedFlight: {
            //         passengers: {
            //             [index]: {
            //                 seatNo: {$set: action.seat}
            //             }
            //         }
            //     }
            // });
            return state;
        }
        default: 
        return state; 
    }
}