import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends React.Component {
    render() {
        <div class="NoteForm">
          <div class="form-actions">
            <button type="button">
              <i class="fa fa-trash-o"></i>
            </button>
          </div>
          <form>
            <p>
              <input
                type="text"
                name="title"
                placeholder="Title your note"
              />
            </p>
            
            <textarea name="body"></textarea>
          </form>
        </div>
    }
}

export default NoteForm