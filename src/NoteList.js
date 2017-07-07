import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = ({ notes, setCurrentNote }) => {
  const noteIds = Object.keys(notes)

    return (
        <div class="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            {notesId.map(noteId => (
            <Note 
              note={notes[noteId]} 
              key={noteId} 
              setCurrentNote={setCurrentNote}
            />
            ))}
          </ul>
        </div>
    )

}

export default NoteList