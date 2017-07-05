import React from 'react'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = () => {
    return (
        <div className="Main">
            <SideBar />
            <NoteList />
            <NoteForm />
        </div>
    )
}

export default Main