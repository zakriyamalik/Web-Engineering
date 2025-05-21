const initialState={
    name:"",
    password:"",
};

function loginReducer(state = initialState,action){
    switch(action.type)
    {
        case 'LOGIN':
            return {
                ...state,
                name:action.payload.name,
                password:action.payload.password
            };
            default: 
              return state
            
        
    }

}

const store=createStore(loginReducer);

export default store;