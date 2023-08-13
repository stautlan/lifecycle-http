import React, { useState, useEffect } from 'react'
import { nanoid } from "nanoid";

type Props = {
    onAdd: (note: Note) => void;
}

const NoteAdd = ({onAdd}: Props) => {
    const [note, setNote] = useState<Note>({
        id: nanoid(),
        text: ''
    });
    const [post, setPost] = useState({
        postId: 0,
        errorMessage: ''
    });

    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        //debugger
        if (note.text === "")        
            //throw new Error('Function not implemented value.');
            return;
        onAdd(note);
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-type': 'application/json' },
        //     body: JSON.stringify(note)
        // };
        // const data = fetch('http://127.0.0.1:5173/add', requestOptions)
        // .then(response => response.json());
        // console.log(data);

    }

    // async function SendMessage() {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-type': 'application/json' },
    //         data: JSON.stringify(note)
    //     };
    //     const response = await fetch('http://127.0.0.1:5173/add', requestOptions);
    //     const data = await response.json();
    //     setPost({ postId: data.id });

    // }

    function setMessage(value: string) {
        note.text = value;
    }

  return (
    <>
        <form action="" method="post" onSubmit={handleSubmit} className="form-submit">
            <div className="form-submit">
                <label >Введите ваше сообщение: </label>
                <input type='text' name="text" id='text' 
                    onChange={(e) => setMessage(e.target.value)} />
            </div>
            {/* <div className="form-submit">
                <label >Введите ваше имя: </label>
                <input type="text" name="name" id="name" required />
            </div>
            <div className="form-submit">
                <label >Введите ваш email: </label>
                <input type="email" name="email" id="email" required />
            </div> */}
            <div className="form-submit">
                <input type="submit" value="Сохранить" />
            </div>
        </form>
    </>
  )
}

export default NoteAdd