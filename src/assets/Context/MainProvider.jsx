import React, { useState } from "react";
import { MainContext } from "./MainContext";

function MainProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [editedName, setEditedName] = useState("");
  const [editBook, setEditBook] = useState(false);

  const contextValues = {
    books,
    setBooks,
    title,
    setTitle,
    editedName,
    setEditedName,
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
