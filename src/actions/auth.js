import Swal from "sweetalert2";
import { firebase, googleAuthProvider } from '../firebase/firebase-config';

import { types } from "../components/types/types";
import { noteLogout } from "./notes";
import { finishLoading, startLoading } from "./ui";

export const startLogin = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch(e => {
                dispatch(finishLoading());
                Swal.fire('Error', e.message, 'error')
            });
    }
}

export const startRegister = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });
                dispatch(login(user.uid, user.displayName));
            })
            .catch(e => {
                Swal.fire('Error', e.message, 'error')
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

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout());
        dispatch(noteLogout());
    }
}

export const logout = () => ({
    type: types.logout,
});