import { ComponentType } from "react";
import NoteAdd from './Note/NoteAdd'
import NoteEdit from "./Note/NoteEdit";
import NoteList from "./Note/NoteList";

const routes: { readonly [key: string]: ComponentType } = {
    '/add': NoteAdd,
    '/edit': NoteEdit,
    '/view': NoteList,
}

export default routes;