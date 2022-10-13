import { useState } from 'react'
import {nanoid} from 'nanoid'
import NoteList from './components/NoteList'

function App() {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: 'This is a new note',
    date: '14/4/2021'
  },
    {
    id: nanoid(),
    text: 'This is a new note',
    date: '14/4/2021'
  },
    {
    id: nanoid(),
    text: 'This is a new note',
    date: '14/4/2021'
  },
    {
    id: nanoid(),
    text: 'This is a new note',
    date: '14/4/2021'
  },
    {
    id: nanoid(),
    text: 'This',
    date: '14/4/2021'
  }
])
  return (
    <div className = 'container'>
      <NoteList notes = {notes}/>
    </div>
  )
}

export default App
