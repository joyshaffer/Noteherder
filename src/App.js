import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import base, { auth } from './base'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  constructor() {
    super()

    //this.setCurrentNote=this.setCurrentNote.bind(this)
    //used the arrow function for it instead to bind to this

    this.state = {
      notes:  {},
      currentNoteiId: null,
      uid: null,
    } 
  }

  componentWillMount = () => {
    this.getUserFromLocalStorage()
    auth.onAuthStateChanged(
      (user) => {
        if(user) {
            //signed in
            this.handleAuth(user)
        } else {
            //signed out
            this.handleUnAuth()
        }
      }
    )
  }

  getUserFromLocalStorage = () => {
    const uid = localStorage.getItem('uid')
    if(!uid) return
    this.setState({ uid })
  }

  syncNotes = () => {
    this.bindingRef = base.syncState(
      `notes/this.state.uid`,
      {
        context: this, //what object the state is on
        state: 'notes', //which property to sync
      }
    )
  }
  

//arrow function binds this
  setCurrentNote = (note) => {
    this.setState({ currentNoteId: note.id })
  }

  resetCurrentNote = () => {
    this.setState({ id: null })
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
    notes[this.state.currentNoteId.id] = null

    this.setState({ notes })
    this.resetCurrentNote()
  }

  signedIn = () => {
    return this.state.uid
  }

  handleAuth = (user) => {
    localStorage.setItem('uid', user.uid)
    this.setState(
      { uid: user.uid },
      this.syncNotes
      )
  }

  handleUnAuth =() => {
    localStorage.removeItem('uid')

    if(this.bindingRef) {
      base.removeBinding(this.bindingRef)
    }

    this.setState({ 
      uid: null,
      notes: {},
    })

    this.resetCurrentNote()
  }

  signOut = () => {
    auth.signOut()
  }

  renderMain() {
    const actions = {
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      saveNote: this.saveNote,
      removeCurrentNote: this.removeCurrentNote,
      signOut: this.signOut,
    }

    const noteData = {
      notes: this.state.notes,
      currentNoteId: this.state.currentNoteId,
    }

    return (
      <Main 
          {...noteData}
          {...actions}
        />
    )
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route 
            path="/notes" 
            render={() => (
              <Main
                {...actions}
                {...noteData}
              />
            )} 
          />
        </Switch>
      </div>
    )
  }
}

export default App