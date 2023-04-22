import { useState } from "react";
import BookCreate from "./assets/components/BookCreate";
import BookShow from "./assets/components/BookShow";

function App() {
  const [books, setBooks] = useState([]);
  return (
    <div>
      <BookCreate setBooks={setBooks} books={books} />
      <BookShow books={books} />
    </div>
  );
}

export default App;
