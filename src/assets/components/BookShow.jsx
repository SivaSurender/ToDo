import React from "react";

function BookShow({ books }) {
  return (
    <div>
      {books?.map((a) => (
        <h1 onClick={() => console.log(a.id)} key={a.id}>
          {a.name}
        </h1>
      ))}
    </div>
  );
}

export default BookShow;
