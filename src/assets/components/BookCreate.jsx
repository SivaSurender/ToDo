import React, { useState } from "react";
function BookCreate({ setBooks, books }) {
  const [title, setTitle] = useState("");
  const createHandler = function (event) {
    event.preventDefault();
    // const newId = books.length > 0 ? books[books.length - 1].id + 1 : 1;

    setBooks((prev) => {
      console.log(prev, "prev");
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
  console.log(books);
  return (
    <div>
      <form onSubmit={createHandler}>
        <p htmlFor="topic">Choose the topic of music you want to add</p>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default BookCreate;
