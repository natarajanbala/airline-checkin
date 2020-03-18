import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL;

export function getFlightList() {
    return fetch(baseUrl + "/flights/")
        .then(handleResponse)
        .catch(handleError);
}

export function getPassengersApi() {
    return fetch(baseUrl + "/passengers/")
        .then(handleResponse)
        .catch(handleError);
}


export function getSeatsApi(flightId) {
    return fetch(baseUrl + "/seats/" + flightId)
        .then(handleResponse)
        .catch(handleError);
}
