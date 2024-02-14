import * as actionType from "../Actions/actionType"


export const Setdata = (data) => {
    return{
        type : actionType.SET_DATA,

        
        payload : data,
    }
}

