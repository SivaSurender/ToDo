import React from "react";
import BookShow from "./BookShow";

function BookList({ books }) {
  return (
    <>
      {books?.map((eachBook) => (
        <div className="book-list">
          <BookShow key={eachBook.id} bookName={eachBook.name} />
        </div>
      ))}
    </>
  );
}

export default BookList;
