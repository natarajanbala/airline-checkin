import axios from 'axios';
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL;

export async function getFlightList() {
    return await axios.get(baseUrl + "/flights/")
                        .then(handleResponse)
                        .catch(handleError);
    
}