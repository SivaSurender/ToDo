import axios from "axios";
import React, { useState, useContext } from "react";
import { MainContext } from "../Context/MainContext";
import BookEdit from "./BookEdit";

function BookShow({ bookName, bookId }) {
  // const [editBook, setEditBook] = useState(false);

  const { editBook, setEditBook, setBooks } = useContext(MainContext);

  const deleteHandler = async (bid) => {
    //delet the record
    const res = await axios.delete(`http://localhost:3001/books/${bid}`);

    // to get updated data post delete request
    const getAfterDelData = await axios.get("http://localhost:3001/books/");
    setBooks(getAfterDelData.data);
  };

  const editHandler = () => {
    setEditBook(!editBook);
  };
  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${bookId}/300/200`} alt="books" />
      {!editBook ? (
        bookName
      ) : (
        <BookEdit
          bookId={bookId}
          // setBooks={setBooks}
          // setEditBook={setEditBook}
          bookName={bookName}
        />
      )}
      <div className="actions">
        <button
          onClick={() => deleteHandler(bookId)}
          className="delete"
        ></button>
        <button onClick={() => editHandler()} className="edit"></button>
      </div>
    </div>
  );
}

export default BookShow;
