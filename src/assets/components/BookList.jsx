import React from "react";
import BookShow from "./BookShow";

function BookList({ books, setBooks }) {
  return (
    <>
      {books?.map((eachBook) => (
        <div className="book-list" key={eachBook.id}>
          <BookShow
            // setBooks={setBooks}
            bookName={eachBook.name}
            bookId={eachBook.id}
          />
        </div>
      ))}
    </>
  );
}

export default BookList;
