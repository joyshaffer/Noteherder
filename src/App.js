import React, { Component } from 'react'

import './App.css'
import Main from './Main'


class App extends Component {
  constructor() {
    super()

    //this.setCurrentNote=this.setCurrentNote.bind(this)

    this.state = {
      notes:  {},

      currentNote: this.blankNote()
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

  render() {
    const actions = {
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      saveNote: this.saveNote,
    }

    return (
      <div className="App">
        <Main 
          notes={this.state.notes} 
          currentNote={this.state.currentNote}
          {...actions}
          saveNote={this.saveNote} 
        />
      </div>
    )
  }
}

export default App