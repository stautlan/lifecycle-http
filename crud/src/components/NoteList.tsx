import { useState } from 'react'
import NoteWrap from './NoteWrap'

type Props = {
  notes: Note[],
  onDelete: (text: string) => void;
}

const NoteList = ({notes, onDelete}: Props) => {
  //const [value, setValue] = useState<Note>()
  // function handlerDelete(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
  //   //throw new Error('Function not implemented.');
  //   onDelete(value)
  // }

  return (
    <div>
      <ul>
      {notes.map((item, i) => (
        <NoteWrap key={i} note={item} onDelete={onDelete} />)
      )}
      </ul>
    </div>
  )
}

export default NoteList