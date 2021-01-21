import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from 'react-redux';

import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        // Observer
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
            }
        })
    }, []);


    return (
        <>
            <Router>
                <div>
                    <Switch>
                        <Route
                            path="/auth"
                            component={AuthRouter}
                        />
                        <Route
                            path="/"
                            exact
                            component={JournalScreen}
                        />

                        <Redirect to="/auth/login" />

                    </Switch>
                </div>
            </Router>
        </>
    )
}
