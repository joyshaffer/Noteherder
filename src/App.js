import React, { Component } from 'react'

import './App.css'
import Main from './Main'


class App extends Component {
  constructor() {
    super()

    //this.setCurrentNote=this.setCurrentNote.bind(this)

    this.state = {
      notes:  {},

      currentNote: {
        id: null,
        title: '',
        body: '',
      },
    }
  }

//arrow function binds this
  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  saveNote = (note) => {
    if(!note.id) {
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ notes })
  }

  render() {
    return (
      <div className="App">
        <Main 
          notes={this.state.notes} 
          currentNote={this.state.currentNote}
          setCurrentNote={this.setCurrentNote}
          saveNote={this.saveNote} 
        />
      </div>
    )
  }
}

export default App