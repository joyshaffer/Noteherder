import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = ({ notes, setCurrentNote }) => {
//['note-4', 'note-5']
const noteIds = Object.keys(notes)

const handleClick = (Id) => {
  props.noteChange(Id)
}

    return (
        <div class="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            {notesId.map(noteId => 
            <Note 
              note={notes[noteId]} 
              key={noteId} 
              setCurrentNote={setCurrentNote}
            />
            )}
          </ul>
        </div>
    )

}

export default NoteList