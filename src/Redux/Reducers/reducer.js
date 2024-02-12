

const initialState = {
    data: [],

}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data:action.payload,
            }
            default:
                return state;
    }
}

export default Reducer;