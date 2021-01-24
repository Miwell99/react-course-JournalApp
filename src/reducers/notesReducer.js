import { types } from "../components/types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    // add the id from firestore to the state
                    ...action.payload,
                },
            }

        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload],
            }
        default:
            return state;
    }

}