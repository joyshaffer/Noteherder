import React from 'react'
import './NoteList.css'
import Note from './Note'

const NoteList = () => {
    const note = {
        id: 'note-4',
        title: 'My fancy note',
        body: 'Oh so fancy',
    }

    return (
        <div class="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            <Note note={note} />
          </ul>
        </div>
    )

}

export default NoteList