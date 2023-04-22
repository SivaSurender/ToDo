import axios from "axios";
import React, { useContext, useState } from "react";
import { MainContext } from "../Context/MainContext";

function BookCreate({ setBooks, books }) {
  // const [title, setTitle] = useState("");
  const { title, setTitle } = useContext(MainContext);

  const createHandler = async function (event) {
    event.preventDefault();
    // contacting db which we created to create a new name via post request
    const response = await axios.post("http://localhost:3001/books", {
      name: title,
    });

    console.log(response, "resr");

    setBooks((prev) => {
      return [...prev, response.data];
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
          required
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <button className="button">Add</button>
      </form>
    </div>
  );
}

export default BookCreate;
