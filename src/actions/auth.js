import { types } from "../components/types/types"

export const startLogin = (email,password) =>{
    return (dispatch) =>{
        dispatch(login(123,'Pedro'))
    }
}

export const login = (uid,displayName) =>{
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}