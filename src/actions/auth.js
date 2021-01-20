import { types } from "../components/types/types"

import { firebase, googleAuthProvider } from '../firebase/firabase-config'

export const startLogin = (email, password) => {
    return (dispatch) => {
        dispatch(login(123, 'Pedro'))
    }
}

export const startRegister = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({displayName: name});
            })
            .catch( e =>{
                console.log(e);
            });
    }
}

export const startLoginWithGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}

export const startRegisterWithGoogle = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                // dispatch(
                //     login(user.uid, user.displayName)
                // )
            });
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
        }
    }
}