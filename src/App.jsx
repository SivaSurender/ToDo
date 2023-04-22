import { useState } from "react";
import BookCreate from "./assets/components/BookCreate";
import BookList from "./assets/components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  return (
    <div className="app">
      <BookCreate setBooks={setBooks} books={books} />
      <BookList setBooks={setBooks} books={books} />
    </div>
  );
}

export default App;
