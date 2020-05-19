import * as types from './actionTypes';
const baseUrl = process.env.API_URL;


export function gridSelection(selectedItems) {
    return {
        type: types.GRID_SELECTION,
        selectedItems
    }
}

export function checkIn(actionType, passengerData, seat) {
    console.log('chekcin actions - ', actionType, passengerData, seat);
    // return {
    //     type: types.SAVE_CHECKIN,
    //     passengerData,
    //     seat
    // }
    return function(dispatch){
        // return axios.get(`${baseUrl}/passengers/${passengerData.id}`)
        // .then(res => console.log('get res -- ', res));
        return fetch(`${baseUrl}/passengers/${passengerData.id}`, {
            method: "POST", // POST for create, PUT to update when id already exists.
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ seatNo: seat})
          })
            .then(res => console.log('f res - ', res));
        // return axios.post(`${baseUrl}/passengers/${passengerData.id}`, { seatNo: seat})
        // .then(res => {
        //     console.log('res -- ', res);
        // });
    }
}


