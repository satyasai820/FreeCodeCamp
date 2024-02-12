import * as actionType from "../Actions/actionType"


export const SetData2 = (data2) => {
    return{
        type:actionType.GET_DATA,
        payload : data2,
    }
}