import { useState, useEffect } from 'react'
import WidgetNotes from './WidgetNotes'
import {deleteNote, getNote, newNote} from './extensionCRUD'
import WidgetAddNote from './WidgetAddNote';
import refr from '../icons/Refresh_icon.png'

const ListNotes = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [state, setState] = useState(0);

    useEffect(() => {
        getNote().then(data => setNotes(data))
    }, [state]);

    function removeClick(value: Note) {
        deleteNote(value.id)
        state == 0 ? setState(1) : setState(0);
    }

    const handlerAddClick = (value: string) => {
        newNote({
            id: 0,
            content: value
        })
        state == 0 ? setState(1) : setState(0);
    }

  return (
    <div>
        <h2 className='header'>Notes</h2>
        <button name='header'
            onClick={() => {state == 0 ? setState(1) : setState(0)}}>
                <img className='imgretr' src={refr} alt='Refresh' />
        </button>
        <hr />
        <div className='widget'>
            {(typeof notes === 'undefined') ? 
            (<p>Загрузка...</p>) : notes.map((item, index) => (
                <WidgetNotes key={index} note={item} onClick={removeClick} />
            ))}
        </div>
        <WidgetAddNote addNote={handlerAddClick} />
    </div>
  )
}

export default ListNotes