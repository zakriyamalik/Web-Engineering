import {combineReducers, legacy_createStore} from "redux"
import load_concepts from "./actions/conceptAction";
import { LOAD_CONCEPTS } from "./actions/actionTypes";

const initialState ={
    conceptData:"",
};


function conceptReducer(state=initialState,action){
    switch(action.type)
    {
        case LOAD_CONCEPTS:
            return state

        default:
            return state

    }

}

const rootReducer=combineReducers({
    concepts:conceptReducer,
})

const store=legacy_createStore(rootReducer);
store.dispatch(load_concepts());


export default store
