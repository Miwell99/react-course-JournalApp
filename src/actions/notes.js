import { types } from "../components/types/types";
import { db } from "../firebase/firebase-config";

// the second param is the name of a function you want to access the state (useSelector)
export const startNewNote = () => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        // insert
        const insert = await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch(activeNote(insert.id, newNote));
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note,
    }
});
