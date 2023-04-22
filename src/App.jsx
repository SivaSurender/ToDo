import axios from "axios";
import { useEffect, useState } from "react";
import BookCreate from "./assets/components/BookCreate";
import BookList from "./assets/components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getInitialData = async () => {
      const res = await axios.get("http://localhost:3001/books");

      setBooks(res.data);
      console.log(res.data, "from initial");
    };

    getInitialData();
  }, []);

  console.log(books);
  return (
    <div className="app">
      <BookCreate setBooks={setBooks} books={books} />
      <BookList setBooks={setBooks} books={books} />
    </div>
  );
}

export default App;
