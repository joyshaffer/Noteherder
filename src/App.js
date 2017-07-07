import React, { Component } from 'react'
import base from './base'

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

  componentDidMount = () => {
    base.syncState(
      'notes',
      {
        context: this, //what object the state is on
        state: 'notes', //which property to sync
      }
    )
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

  resetCurrentNote = () => {
    this.setState(blankNote())
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
    notes[this.state.currentNote.id] = null

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

    const noteData = {
      notes: this.state.notes,
      currentNote: this.state.currentNote,
    }

    return (
      <div className="App">
        <Main 
          {...noteData}
          {...actions}
        />
      </div>
    )
  }
}

export default App