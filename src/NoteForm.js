import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      note: this.blankNote(),
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  handleChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.setState(
      { note },
      () => this.props.saveNote(this.state.note)
    )
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.setState({ note: this.blankNote() })
  }

    render() {
      return (
        <div class="NoteForm">
          <form onSubmit={this.handleSubmit}>
            <p>
              <input
                type="text"
                name="title"
                placeholder="Title of your note"
                onChange={this.handleChanges}
                value={this.props.currentNote.title}
              />
            </p>
            <p>
              <textarea
                name="body"
                placeholder="Start typing..."
                onChange={this.handleChanges}
                value={this.props.currentNote.body}
              ></textarea>
            </p>
            <button type="submit">
              Save and new
            </button>
          </form>
        </div>
      )
    }
}

export default NoteForm