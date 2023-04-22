import React, { useState } from "react";
function BookCreate({ setBooks, books }) {
  const [title, setTitle] = useState("");
  const createHandler = function (event) {
    event.preventDefault();
    // const newId = books.length > 0 ? books[books.length - 1].id + 1 : 1;

    setBooks((prev) => {
      return [
        ...prev,
        {
          id: books.length === 0 ? 1 : prev[prev.length - 1]?.id + 1,
          name: title,
        },
      ];
    });
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={createHandler}>
        <p htmlFor="topic">Title</p>
        <input
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <button className="button">Add</button>
      </form>
    </div>
  );
}

export default BookCreate;
