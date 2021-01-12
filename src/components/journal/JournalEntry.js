import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1502164980785-f8aa41d53611?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80)'
                }}>

            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title"> New day</p>
                <p className="journal__entry-content">
                    Duis minim nisi minim eiusmod irure.   velit Lorem exercitation.
                </p>
            </div>
            <div className="journal__entry-date">
                <span>Monday</span>
                <h4>28</h4>

            </div>

        </div>
    )
}
