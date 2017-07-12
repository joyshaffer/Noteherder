import React, { Component } from 'react'
import RichTextEditor from 'react-rte'
import './NoteForm.css'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: this.blankNote(),
      editorValue: RichTextEditor.createEmptyValue(),
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '', 
      body: '', 
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const idFromUrl = nextProps.match.params.id
    const note = nextProps.notes[idFromUrl] || this.blankNote() 

    const noteNoteFound = idFromUrl && !note.id
    if(noteNoteFound && nextProps.firebaseNotesSynced ) {
      this.props.history.replace('/notes')
    }

    let editorValue = this.state.editorValue
    if(editorValue.toString('html') !== note.body) {
      editorValue = RichTextEditor.createValueFromString(note.body, 'html')
    }

    this.setState({ note, editorValue })
  }

  handleChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.setState(
      { note },
      () => this.props.saveNote(note),
    )
    
  }

  handleEditorChanges = (editorValue) => {
    const note = {...this.state.note}
    note.body = editorValue.toString('html')
    this.setState(
      { note, editorValue },
      () => this.props.saveNote(note)
    )
  }

handleRemove = () => {
  this.props.removeCurrentNote(this.state.note)
}

  render() {
    return (
      <div className="NoteForm">
        <div className="form-actions">
          <button
            type="button"
            onClick={this.removeCurrentNote}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
        <form>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.note.title}
              onChange={this.handleChanges}
            />
          </p>
          
          <RichTextEditor
            name="body"
            value={this.state.editorValue}
            onChange={this.handleEditorChanges}
          ></RichTextEditor>
        </form>
      </div>
    )
  }
}

export default NoteForm