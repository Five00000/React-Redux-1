import {
    INCREMENT, 
    DECREMENT,
    INCREMENT_CUSTOM
} from './actions/counter'


const initialState = {
    count: 0,
    test: 'ABC',
    test2: 'DEF'
}


const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        
        case INCREMENT_CUSTOM:
            return {
                ...state,
                count: state.count + action.payload
            }
        default: 
        return state
    }
}

export default counterReducer