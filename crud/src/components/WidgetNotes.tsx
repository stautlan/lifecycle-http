//import React from 'react'

type Props = {
  note: Note,
  onClick: Function //(elem: number) => void,
}

const WidgetNotes = ({note, onClick}: Props) => {

  return (
    <>
        <div>
          <textarea rows={4} cols={20} 
          readOnly={true} wrap="soft" value={note.content} />
        </div>
        <button name="btndelete" onClick={() => onClick(note)}>X</button>
    </>
  )
}

export default WidgetNotes