import React from 'react'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {
    const formProps = {
        notes: props.notes,
        currentNoteId: props.currentNoteId,
        saveNote: props.saveNote,
        removeCurrentNote: props.removeCurrentNote,
    }

    return (
        <div className="Main">
            <Sidebar 
                resetCurrentNote={props.resetCurrentNote}
                signOut={props.signOut}
            />
            <NoteList
                notes={props.notes}
                setCurrentNote={props.setCurrentNote} 
            />

            <Switch>
                <Route path="/notes/:id" 
                    render={() =>
                        <NoteForm
                            {...formProps}
                        />
                    }
                />
            </Switch>

            <NoteForm 
                notes={props.notes}
                currentNoteId={props.currentNoteId}
                saveNote={props.saveNote} 
                removeCurrentNote={props.removeCurrentNote}
            />
        </div>
    )
}

export default Main