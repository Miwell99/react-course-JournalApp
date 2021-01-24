import { db } from "../firebase/firebase-config"

export const loadNotes = async (uid) =>{
    const userNotes = await db.collection(`${uid}/journal/notes`).get();    // firebase get by user
    const notes = [];

    userNotes.forEach(note => {
        notes.push({
            id: note.id,    // The id from firebase is not storaged on data
            ...note.data(),        
        })
    });
    return notes;
}