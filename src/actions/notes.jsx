import Swal from "sweetalert2"

import { db } from "../firebase/firebase-config"
import { fileUpload } from "../helpers/fileUpload"
import { loadNotes } from "../helpers/loadNotes"
import { types } from "../types/types"

export const startNewNote = () =>{
    return async (dispacth, getState) =>{

        const { uid } = getState().auth
        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add( newNote )
        
        dispacth( activeNote( doc.id, newNote ) )
        dispacth( addNewNote ( doc.id, newNote ) )
    }
}

export const activeNote = ( id, note ) =>({
    type: types.notesActive,
    payload:{
        id, 
        ...note
    }
})

export const addNewNote = ( id, note ) =>({
    type: types.notesAddNew,
    payload:{
        id, 
        ...note
    }
})

export const startLoadingNotes = ( uid ) =>{
    return async ( dispacth ) =>{
        const notes = await loadNotes( uid )
        dispacth( setNotes( notes ))
    }
}

export const setNotes = ( notes ) =>({
    type:types.notesLoad,
    payload: notes
})

export const startSaveNote = ( note ) =>{
    return async ( dispacth, getState ) =>{
        const { uid } = getState().auth

        if( !note.url ){
            delete note.url
        }

        const noteToFireStore = { ...note }
        delete noteToFireStore.id

        try {
            await db.doc(`/${ uid }/journal/notes/${ note.id }`).update( noteToFireStore )
            dispacth( refreshNote( note.id, noteToFireStore ))
            Swal.fire('Saved', 'The note has been updated', 'success')
        } catch (error) {
            Swal.fire('Error', 'The note has not been updated', 'error')
        }

    }
}

export const refreshNote = ( id, note )=>({
    type: types.notesUpdated,
    payload: {
        id, 
        note:{
            id,
            ...note
        }
    }
})

export const startUploadingImage = ( file ) =>{
    return async ( dispacth, getState ) =>{
        const { active: activeNote } = getState().note

        Swal.fire({
            title:'Uploading...',
            text:'Please wait...',
            showConfirmButton: false,
            onBeforeOpen: () =>{
                Swal.showLoading()
            }
        })

        const fileUrl = await fileUpload( file )
        activeNote.url = fileUrl
        
        if( activeNote.url ){
            dispacth( startSaveNote( activeNote ) )
            Swal.close()
        }
    }
}

export const startDeleteNote = ( id ) =>{
    return async ( dispacth, getState ) =>{
        const { uid } = getState().auth
        await db.doc(`/${ uid }/journal/notes/${ id }`).delete()

        Swal.fire('Deleted', 'The note has been deleted', 'success')
        dispacth( deleteNote( id ))
    }
}

export const deleteNote =  ( id ) =>({
    type: types.notesDelete,
    payload: id
})

export const notesLogout = () =>({
    type: types.notesLogoutCleaning
})