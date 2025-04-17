import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import './bookdetails.css';

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const id = parseInt(bookId);

  const book = books.find(book => book.bookId === id);

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
    <div className="w-11/12 mx-auto my-8 flex justify-center">
      <div className="md:flex gap-12 font-worksans">
        <div className="flex-[4] p-12 bg-gray-200 flex justify-center items-center rounded-lg">
          <img className="card-img" width="250px" src={image} />
        </div>
        <div className="flex-[6] max-md:mt-4">
          <h1 className="text-4xl font-semibold">{bookName}</h1>
          <p className=" text-gray-700 font-medium">By: {author}</p>
          <p className="my-4 border-y py-2 border-gray-300 font-medium">
            {category}
          </p>
          <p>
            <b>Review : </b>
            <span className="text-sm">{review}</span>
          </p>
          <p className="my-4 border-b pb-4 border-gray-300">
            <b>Tag</b>
            <span className="ml-4 text-green-600">
              <span className="p-1 bg-gray-100 mr-2 rounded-2xl">
                #{tags[0]}
              </span>
              <span className="p-1 bg-gray-100 rounded-2xl">#{tags[1]}</span>
            </span>
          </p>

          <div className="flex gap-8">
            <div>
              <p>Number of Pages: </p>
              <p>Publisher: </p>
              <p>Year of Publishing:</p>
              <p>Rating: </p>
            </div>
            <div className="font-semibold">
              <p>{totalPages}</p>
              <p>{publisher}</p>
              <p>{yearOfPublishing}</p>
              <p>{rating}</p>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <button className="btn">Read</button>
            <button className="btn bg-sky-600 text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
