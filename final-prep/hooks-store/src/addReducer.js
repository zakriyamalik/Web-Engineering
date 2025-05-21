import {createSlice} from '@reduxjs/toolkit'

const initialState={
    count:0,
}

const addReducer=createSlice({
    name:'Add',
    initialState,
    reducers:{
        increment:(state,action)=>{
            
            state.count=action.payload.add+1;
        },
    },

})


export const {increment}=addReducer.actions;
export default addReducer.reducer;