import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploadingImage } from '../../actions/notes'
import moment from "moment";

const NotesAppBar = () => {

    const dispatch = useDispatch()
    const { active:note } = useSelector(state => state.note)
    const noteDate = moment(note.date);
    const handleSave = () =>{   
        dispatch( startSaveNote( note ) )
    }

    const handleImageChange = (e) =>{
        const file = e.target.files[0]
        if( file ){
            dispatch( startUploadingImage( file ) )
        }
    }

    const handlePicture = () =>{
        document.querySelector('#inputSelector').click()
    }

    return (
        <div className='notes__appbar'>
            <span>{ noteDate.format("LLLL") }</span>

            <input 
                id='inputSelector'
                type='file'
                name='file'
                className='input_file'
                onChange= { handleImageChange }
                />

            <div>
                <button 
                    className='btn'
                    onClick={ handlePicture }
                    >
                    Picture
                </button>
                <button className='btn' onClick={ handleSave }>
                    Save
                </button>
            </div>
        </div>
    )
}

export default NotesAppBar
