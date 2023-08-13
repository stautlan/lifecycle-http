import { useState } from 'react'

type Props = {
    notes: Note[],
    selectNote: (id: string) => void;
  }

const NoteCombo = ({notes, selectNote}: Props) => {
    const [value, setValue] = useState<Note>()

    const onSelected = (event: MouseEvent) => { //(event: React.MouseEvent<HTMLSelectElement) => {
        setValue(value);
        if (value)
            selectNote(value?.id)
    }

    return (
      <div>
        <select onClick={p => onSelected}>
        {notes.map((item, i) => (
          <option key={i} value={value?.text}>{item.text}</option>
        ))}
        </select>
      </div>
    )
}

export default NoteCombo