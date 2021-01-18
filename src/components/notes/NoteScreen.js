import React from 'react'
import { NotesAppbar } from './NotesAppbar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppbar />
            <div className="notes__content">
                <input
                    className="notes__input"
                    type="text"
                    placeholder="Some awesome things to do"
                    autoComplete="off"
                />
                <textarea
                    className="notes__textarea"
                    placeholder="What happened today?">
                </textarea>
                <div className="notes__img">
                    <img
                        src="https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
                        alt="background"
                    />
                </div>
            </div>

        </div>
    )
}
