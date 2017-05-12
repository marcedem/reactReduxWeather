import {FETCH_WEATHER} from '../actions/index';

export default function(state= [], action){
    //console.log("action received ",  action);
    
    switch(action.type){
        case FETCH_WEATHER:
            // return state.conact([action.payload.data]); 
            // we don't want to mutate our array, rather add to it.
            return [ action.payload.data, ...state ]; //[city, city, city] ...state is a nice syntaxic sugar from ES6
    }
    
    return state;
}
