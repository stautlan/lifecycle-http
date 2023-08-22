import React, { useState } from 'react'

type Props = {
  addNote: (value: string) => void;
}

const WidgetAddNote = ({addNote}: Props) => {
    const [content, setContent] = useState('');

  return (
    <div>
      <fieldset >
        <legend>Содержимое</legend>
        <textarea rows={4} cols={20} autoComplete='off'
          name="postContent" 
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <button onClick={() => addNote(content)}>Добавить</button>
      </fieldset>
    </div>
  )
}

export default WidgetAddNote