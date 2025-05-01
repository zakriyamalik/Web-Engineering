import { LOAD_CONCEPTS } from "../action/conceptAction"

const initial_State={
    concept_data:[]
}

function conceptReducer(state=initial_State,action){
    switch(action.type)
    {
        case LOAD_CONCEPTS:
            return{
                ...state,
                concept_data:action.payload
            }
            default:
                return state
                

    }

}

export default conceptReducer