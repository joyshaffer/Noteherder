import React, { Component } from 'react'

import './App.css'
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    //this.setCurrentNote=this.setCurrentNote.bind(this)
    //used the arrow function for it instead to bind to this

    this.state = {
      notes:  {},
      currentNote: this.blankNote()
    } 
  }
  
  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

//arrow function binds this
  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  resetCurrentNote = (note) => {
    this.setState({ blankNote() })
  }

  saveNote = (note) => {
    const notes = {...this.state.notes}
    if(!note.id) {
      note.id = Date.now()
    }
    notes[note.id] = note

    this.setState({ notes })
    this.setCurrentNote(note)
  }

  removeCurrentNote = () => {
    const notes = {...this.state.notes}
    delete notes[this.state.currentNote.id]

    this.setState({ notes })
    this.resetCurrentNote()
  }

  render() {
    const actions = {
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      saveNote: this.saveNote,
      removeCurrentNote: this.removeCurrentNote,
    }

    return (
      <div className="App">
        <Main 
          notes={this.state.notes} 
          currentNote={this.state.currentNote}
          {...actions}
        />
      </div>
    )
  }
}

export default App