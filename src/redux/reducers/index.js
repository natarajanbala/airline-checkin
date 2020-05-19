import { combineReducers } from "redux";
import searchFlights from './searchFlightsReducer';
//import passengerGrid from './passengerGridReducer';


const rootReducer = combineReducers({
    searchFlights
});

export default rootReducer;