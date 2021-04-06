import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDeleteNote } from "../../actions/notes";
import { useCustomForm } from "../../hooks/useCustomForm";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.note);
  const dispatch = useDispatch()
  const [formValues, handleInputChange, reset] = useCustomForm(note);

  const { title, body, url, id } = formValues;
  const activeId = useRef( note.id )

  const handleDeleteNote = () =>{
    dispatch( startDeleteNote( id ))
  }

  useEffect(() => {
    if( note.id !== activeId.current){
      reset( note )
      activeId.current = note.id
    }
  }, [ note, reset ])

  useEffect(() => {
    dispatch( activeNote( formValues.id, {...formValues} ) )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues])

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Some awesone title"
          className="notes__title-input"
          autoComplete="off"
          onChange={handleInputChange}
          value={title}
        />

        <textarea
          name="body"
          placeholder="what happened today"
          className="notes__textarea"
          onChange={handleInputChange}
          value={body}
        ></textarea>

        {url && (
          <div className="notes__image">
            <img src={url} alt="imageP" />
          </div>
        )}
      </div>
      <button 
        className='btn btn-danger'
        onClick={ handleDeleteNote }
        >
        Delete
      </button>
    </div>
  );
};

export default NoteScreen;
