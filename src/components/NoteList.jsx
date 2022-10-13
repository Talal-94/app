import Note from "./Note"

const NoteList = ({ notes }) => {
  return (
    <div className = 'note-list'>
      { notes.map(( note ) => (
      <Note id = {note.id} date = {note.date} text = {note.text} /> 
      ))}
    </div>
  )
}

export default NoteList