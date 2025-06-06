import { BookOpenText, MapPin, Users } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

const Readlist = ({ book, handleRemoveList }) => {
  const navigate = useNavigate();

  const {
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="p-4 md:flex border border-gray-200 rounded-lg mb-4 gap-4">
      <div className="py-6 px-12 bg-gray-200 rounded-lg flex justify-center">
        <img className="card-img" width="100px" src={image} />
      </div>
      <div className="max-md:mt-4 font-worksans grow">
        <h1 className="font-playfair text-xl font-semibold">{bookName}</h1>
        <p className="font-medium text-gray-600">By: {author}</p>
        <p className="my-2 md:flex gap-4 items-center">
          <b>Tags:</b>{' '}
          <span className="px-2 py-1 bg-gray-100 text-green-600 rounded-2xl">
            #{tags[0]}
          </span>{' '}
          <span className="px-2 py-1 bg-gray-100 text-green-600 rounded-2xl">
            #{tags[1]}
          </span>{' '}
          <span className="flex gap-2 text-gray-600">
            <MapPin className="w-5" /> Year of Publishing: {yearOfPublishing}
          </span>
        </p>
        <p className="text-gray-600 md:flex gap-4">
          <span className="flex gap-2">
            <Users className="w-5" />
            Publisher: {publisher}
          </span>{' '}
          <span className="flex gap-2">
            <BookOpenText className="w-5" /> Page {totalPages}
          </span>
        </p>
        <div className="mt-2 pt-4 border-t border-gray-300 w-full md:flex items-center gap-2 font-medium text-sm">
          <div className="flex gap-2 max-md:mb-2">
            <p className="px-4 py-2 rounded-2xl bg-sky-100 text-sky-500">
              Category: {category}
            </p>{' '}
            <p className="px-4 py-2 rounded-2xl bg-yellow-50 text-yellow-400">
              Rating: {rating}
            </p>{' '}
          </div>
          <div className="flex gap-2">
            <p
              onClick={() => navigate(`/book/${book.bookId}`)}
              className="cursor-pointer border-none px-4 py-2 rounded-2xl bg-green-100 text-green-600"
            >
              View Details
            </p>
            <p
              onClick={() => handleRemoveList(book.bookId)}
              className="cursor-pointer border-none px-4 py-2 rounded-2xl bg-red-100 text-red-600"
            >
              Remove List
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readlist;
