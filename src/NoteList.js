import React from 'react'
import './NoteList.css'
import Note from './Note'

const NoteList = (props) => {
//['note-4', 'note-5']
const noteIds = Object.keys(props.notes)

    return (
        <div class="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            {notes.map(noteId => <Note note={props.notes[noteId]} />)}
          </ul>
        </div>
    )

}

export default NoteList