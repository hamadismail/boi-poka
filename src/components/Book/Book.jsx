import React from 'react';
import './book.css';
import { Star } from 'lucide-react';

const Book = ({ book }) => {
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="card bg-base-100 shadow-sm border border-gray-200 mb-8 cursor-pointer">
      <div className="card-body">
        <figure className="bg-gray-100 h-48 rounded-lg">
          <img className="book" width="100px" src={image} />
        </figure>
        <div className="card-actions justify-start text-green-600">
          <div className="badge badge-outline">{tags[0]}</div>
          <div className="badge badge-outline">{tags[1]}</div>
        </div>
        <h2 className="card-title">
          {bookName}
          {category === 'Fiction' && (
            <div className="badge text-sm bg-green-600 text-white">NEW</div>
          )}
        </h2>
        <p className="border-b border-dashed border-gray-400 pb-4">
          By: {author}
        </p>
        <div className="card-actions justify-between mt-2">
          <div className="">{category}</div>
          <div className="flex items-center gap-2">
            <Star className="w-4"></Star>
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
