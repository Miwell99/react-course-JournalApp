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
        case types.notesUpdated:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.noteId
                        ? action.payload.note
                        : note
                )
            }

        case types.notesDeleted:
            return {
                ...state,
                active: null,
                notes: state.notes.filter(note => note.id !== action.payload),
            }

        default:
            return state;
    }

}