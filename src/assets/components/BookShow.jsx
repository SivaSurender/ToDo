import React from "react";

function BookShow({ bookName, setBooks, bookId }) {
  const deleteHandler = (bid) => {
    setBooks((prev) => {
      return prev.filter((each) => each.id !== bid);
    });
  };
  return (
    <div className="book-show">
      {bookName}
      <div className="actions">
        <button
          onClick={() => deleteHandler(bookId)}
          className="delete"
        ></button>
        <button onClick={() => deleteHandler(bookId)} className="edit"></button>
      </div>
    </div>
  );
}

export default BookShow;
