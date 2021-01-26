import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NotesAppbar } from './NotesAppbar';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDelete } from '../../actions/notes';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);
    const { title, body, id } = formValues;

    const activeId = useRef(note.id); // To save the current note.

    // Update the view
    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }

    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch(startDelete(id));
    }

    return (
        <div className="notes__main-content">
            <NotesAppbar />
            <div className="notes__content">
                <input
                    className="notes__input"
                    type="text"
                    placeholder="Some awesome things to do"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                    className="notes__textarea"
                    placeholder="What happened today?"
                    name="body"
                    value={body}
                    onChange={handleInputChange}>
                </textarea>
                {
                    (note.url) &&
                    (
                        <div className="notes__img">
                            <img
                                src={note.url}
                                alt="background"
                            />
                        </div>
                    )
                }
            </div>
            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    )
}
