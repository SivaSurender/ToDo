import React, { useState } from "react";
import { MainContext } from "./MainContext";

function MainProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");

  const [editBook, setEditBook] = useState(false);

  const contextValues = {
    books,
    setBooks,
    title,
    setTitle,

    editBook,
    setEditBook,
  };
  return (
    <MainContext.Provider value={contextValues}>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
