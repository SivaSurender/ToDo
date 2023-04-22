import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../Context/MainContext";

function BookEdit({ bookId, setBooks, setEditBook, bookName }) {
  const [editedName, setEditedName] = useState(bookName);

  // const { editedName, setEditedName } = useContext(MainContext);

  console.log(bookName, "bookName");
  const editSubHandler = async (event) => {
    event.preventDefault();
    // update the record
    const response = await axios.put(`http://localhost:3001/books/${bookId}`, {
      name: editedName,
    });

    // get the data after updation
    const getFinal = await axios.get("http://localhost:3001/books/");
    // set the updated data
    setBooks(getFinal.data);
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
