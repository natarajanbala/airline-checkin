import { combineReducers } from "redux";
import searchFlights from './searchFlightsReducer';


const rootReducer = combineReducers({
    searchFlights
});

export default rootReducer;