import React, { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ bookName, setBooks, bookId }) {
  const [editBook, setEditBook] = useState(false);
  const deleteHandler = (bid) => {
    setBooks((prev) => {
      return prev.filter((each) => each.id !== bid);
    });
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
          setBooks={setBooks}
          setEditBook={setEditBook}
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
