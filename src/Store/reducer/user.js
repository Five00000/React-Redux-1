import {
    UPDATE_NAME,
    UPDATE_EMAIL,
    UPDATE_ADDRESS,
    UPDATE_PHONE
} from './actions/user'


const initialState = {
    name: 'John Doe',
    email: 'jd@gmail.com',
    phone: '333 444 2222',
    address: '342 abc st india'
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case UPDATE_PHONE:
            return {
                ...state,
                phone: action.payload
            }
        case UPDATE_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        default:
            return state
    }
}


export default userReducer