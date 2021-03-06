import {CLICK_ON_TILE} from '../actionTypes/tileActionTypes';


// Reducers are functions which will accept action type, payload and return the new state.

const childState = [];

for(let i=0; i<100; i++) {
    childState.push(0);
}
const initialState = childState;

const tileCountReducer = (state = initialState, action) => {

    const actionType = action.type;
    const payLoad = action.tileNumber;
    const newState = state.slice();

    switch(actionType) {
        case CLICK_ON_TILE:
         
            newState[payLoad] = newState[payLoad] + 1;
            break;
    }

    return newState;
}

export default tileCountReducer;