import { useState } from "react";
import BookCreate from "./assets/components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);
  return (
    <div>
      App
      <BookCreate setBooks={setBooks} books={books} />
    </div>
  );
}

export default App;
