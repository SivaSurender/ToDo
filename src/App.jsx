import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BookCreate from "./assets/components/BookCreate";
import BookList from "./assets/components/BookList";
import { MainContext } from "./assets/Context/MainContext";

function App() {
  // const [books, setBooks] = useState([]);

  const { books, setBooks } = useContext(MainContext);

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
