import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from 'react-redux';

import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRouter';
import { PrivateRoute } from './PrivateRouter';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Observer: Execute only if user change (to remember login after refresh)
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        })
    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return (
            //  TODO: Add here a loading screen component.
            <h1>Wait...</h1>
        )
    }

    return (
        <>
            <Router>
                <div>
                    <Switch>
                        <PublicRoute
                            path="/auth"
                            isAuthenticated={isLoggedIn}
                            component={AuthRouter}
                        />
                        <PrivateRoute
                            path="/"
                            isAuthenticated={isLoggedIn}
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
