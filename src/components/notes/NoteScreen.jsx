import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesone title"
          className="notes__title-input"
          autoComplete='off'
        />

        <textarea
          placeholder="what happened today"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://conceptodefinicion.de/wp-content/uploads/2014/05/Imagen-2.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
