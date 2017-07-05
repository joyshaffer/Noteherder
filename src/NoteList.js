import React from 'react'
import './NoteList.css'
import Note from './Note'

const NoteList = () => {
    const notes = {
    'note-4': {
        id: 'note-4',
        title: 'Note from obj',
        body: 'Oh so fancy',
    },
    'note-5': {
        id: 'note-5',
        title: 'Another one',
        body: 'Very fancy',
    },  
}

//['note-4', 'note-5']
const noteIds = Object.keys(notes)

    return (
        <div class="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            {notes.map(noteId => <Note note={notes[noteId]} />)}
          </ul>
        </div>
    )

}

export default NoteList