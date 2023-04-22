import React, { useState } from "react";

function BookEdit({ bookId, setBooks, setEditBook }) {
  const [editedName, setEditedName] = useState("");
  const editSubHandler = (event) => {
    event.preventDefault();

    setBooks((prev) => {
      return prev.map((each, index) => {
        if (each.id === bookId) {
          return { ...each, name: editedName };
        }
        return each;
      });
    });
    console.log(editedName);
    setEditBook(false);
  };
  return (
    <form className="book-edit" onSubmit={editSubHandler}>
      <label>Title</label>
      <input
        value={editedName}
        type="text"
        className="input"
        onChange={(e) => setEditedName(e.target.value)}
      />
      <button type="submit" className="button is-primary">
        {" "}
        Save
      </button>
    </form>
  );
}

export default BookEdit;
