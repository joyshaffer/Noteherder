import React from 'react'

const Note= (props) => {
    const handleClick = () => {
        console.log('click')
    }
    return (
        <a onClick={handleClick}>
            <li>
                <div class="note">
                  <div class="note-title">
                    {props.note.title}
                  </div>
                  <div class="note-body">
                    <p>
                     {props.note.body}
                    </p>
                  </div>
                </div>
            </li>
        </a>
    )
}

export default Note