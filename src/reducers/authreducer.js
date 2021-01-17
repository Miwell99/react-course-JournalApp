import { types } from "../components/types/types";

// const initialState = {
//     uid: 123,
//     name: 'Miguel'
// }

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayname
            }

        case types.logout:
            return {}

        default:
            return state;
    }
}