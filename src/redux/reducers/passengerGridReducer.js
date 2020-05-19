// import initialState from "./initialState";
// import deepFreeze from 'deep-freeze';
// import * as types from "../actions/actionTypes";

// export default function passengerGridReducer(state = initialState, action) {
//     deepFreeze(state);

//     switch (action.type) {
//         case types.SELECTED_ITEMS: {
//             console.log('sttt --', state, action);

//             return {
//                 ...state,
//                 selectedItems: action.selectedItems
//             }
//         }
//         default: 
//         return state; 
//     }
// }