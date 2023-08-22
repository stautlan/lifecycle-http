export const getNote = async () => {
    try {
        const response = await fetch('http://localhost:7070/notes');
        //if (!response.ok) {
        //    throw new Error('error get');
        //}
        const result = await response.json();
        return result;
    } catch (er) {
        console.error('getNote error: ' + er);
    }
}

export const newNote = async (note: Note) => {
    try {
        const response = await fetch('http://localhost:7070/notes', {
            method: 'POST',
            body: JSON.stringify({
                id: note.id,
                content: note.content,
            }),
            headers: { 'Content-type': 'application/json;charset=UTF-8' }
        });
        //if (!response.ok) {
        //    throw new Error('error post')
        //}
        //const result = response.json();
        //return result;
    } catch (er) {
        console.error('newNote error: ' + er);
    }
}

export const deleteNote = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:7070/notes/${id}`, {
            method: 'DELETE'
        });
        //if (!response.ok) {
        //    throw new Error('error delete');
        //}
        //const result = response.json();
        //return result;
    } catch (er) {
        console.log('deleteNote error: ' + er);
    }
}