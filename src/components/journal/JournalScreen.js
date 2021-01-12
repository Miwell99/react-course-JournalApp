import React from 'react'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {
    return (
        <div>
            <div className="journal__main-content">
            <Sidebar/>
            <main>
                <h1>Main Content</h1>
            </main>
            </div>

        </div>
    )
}
