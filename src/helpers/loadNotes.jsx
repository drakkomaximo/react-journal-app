import { db } from "../firebase/firebase-config"

export const loadNotes = async ( uid ) =>{

    const notesSnap = await db.collection(`${ uid }/journal/notes`).get()
    const notes = []

    notesSnap.forEach( snapChlid =>{
        notes.push({
            id: snapChlid.id,
            ...snapChlid.data()
        })
    })

    return notes
}