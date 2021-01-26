import Swal from "sweetalert2";
import { types } from "../components/types/types";
import { db } from "../firebase/firebase-config";
import { Cloudinary__fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";

//react-course-journalApp

// The second param is the name of a function you want to access the state (useSelector)
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

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const userNotes = await loadNotes(uid);
        dispatch(setNotes(userNotes));

    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes,

})

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        // To prevent firebase undefined property error.
        if (!note.url) {
            delete note.url
        }
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;      // remove a property from the object
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

        dispatch(refreshNote(note.id, note));

        Swal.fire('Saved', note.title, 'success');
    }
}

export const refreshNote = (noteId, note) => ({
    type: types.notesUpdated,
    payload: {
        noteId,
        note: {
            noteId,
            ...note
        }
    }
});

export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const { active: activeNote } = getState().notes;
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        })
        const fileUrl = await Cloudinary__fileUpload(file);
        activeNote.url = fileUrl;
        dispatch(startSaveNote(activeNote));

        Swal.close();
    }
}

export const startDelete = (noteId) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        await db.doc(`${uid}/journal/notes/${uid}`).delete();
        
        dispatch(deleteNote(noteId));
    }
}

export const deleteNote = (noteId) => ({
    type: types.notesDeleted,
    payload: noteId,
});
