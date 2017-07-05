import React from 'react'
import './NoteList.css'
import Note from './Note'

const NoteList = () => {
    const notes = [
    {
        id: 'note-4',
        title: 'My fancy note',
        body: 'Oh so fancy',
    },
    {
        id: 'note-5',
        title: 'Another one',
        body: 'Very fancy',
    }   

    ]

    return (
        <div class="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            {notes.map(note => <Note note={note} />)}
          </ul>
        </div>
    )

}

export default NoteList