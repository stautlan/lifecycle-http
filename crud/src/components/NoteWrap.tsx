import React from 'react'

type Props = {
    note: Note,
    onDelete: (id: string) => void
}

const NoteWrap = ({note, onDelete}: Props) => {
  return (
    <div>
        <p>{note.text}</p>
        <button onClick={() => onDelete(note.id)}>x</button>
    </div>
  )
}

export default NoteWrap