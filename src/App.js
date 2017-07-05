import React, { Component } from 'react'

import './App.css'
import Main from './Main'


class App extends Component {
constructor() {
  super()

  this.state = {
    notes: {
      'note-4': {
        id: 'note-4',
        title: 'from app state',
        body:'fancy',
      },
      'note-5': {
        id: 'note-5',
        title: 'from app state',
        body:'fancy',
      },
    }
  }
}

  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes} />
      </div>
    )
  }
}

export default App
