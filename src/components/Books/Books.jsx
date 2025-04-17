import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetch('/booksData.json')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  if (!books) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2 className="text-center text-3xl mb-4 font-bold font-playfair">
        Books
      </h2>
      <div className="md:grid md:grid-cols-3 gap-4 font-worksans">
        {books.map(book => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </>
  );
};

export default Books;
