import { useState, useEffect, useCallback } from 'react'
import './App.css'
import NoteList from './components/NoteList'
import NoteAdd from './components/NoteAdd'
import { notesSource } from './components/data'

function App() {
  const [notes, setNotes] = useState(notesSource);

  useEffect(() => {
    fetch('http://127.0.0.1:5173/add')
    .then(response => {
      if (response.ok) {
        return response.json;
      }
    })
  }, []);

  const addNote = useCallback( (note: Note) => {
    setNotes(prevNote => {
      return [...prevNote, note];
    })
  }, []);

  const onDelete = useCallback((id: string) => {
    setNotes(prevNotes => {
      return prevNotes.filter(it => it.id !== id)
    })
  }, [])

  const fetchNote = async () => {
    try {
      const responce = await fetch('http://127.0.0.1:7070/notes');
      if (!responce.ok) {
        throw new Error('Error fetch');
      }
      const data = await responce.json();
      setNotes(data);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // (async () => {

    // })()

    fetchNote();
    return () => {
      
    }
  }, [])

  return (
    <>
      <NoteList notes={notes} onDelete={onDelete} />
      <NoteAdd onAdd={addNote} />
    </>
  )
}

export default App
