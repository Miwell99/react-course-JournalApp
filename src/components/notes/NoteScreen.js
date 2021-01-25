import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NotesAppbar } from './NotesAppbar';
import { useForm } from '../../hooks/useForm';
import { activeNote } from '../../actions/notes';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);
    const { title, body } = formValues;

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
    }, [formValues,dispatch])

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
                                src="https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
                                alt="background"
                            />
                        </div>
                    )
                }
            </div>

        </div>
    )
}
