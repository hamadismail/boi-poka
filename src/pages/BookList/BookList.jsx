import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Readlist from '../../components/Readlist/Readlist';
import { useLoaderData } from 'react-router';
import {
  getLocalStorage,
  removeLocalStorage,
} from '../../utilities/localStorage';

const BookList = () => {
  const books = useLoaderData();
  const [readlist, setReadlist] = useState([]);

  useEffect(() => {
    const data = getLocalStorage();
    const readlistIds = data.map(id => parseInt(id));
    const readlistItem = [];

    for (const id of readlistIds) {
      const readlists = books.find(book => book.bookId === id);
      readlists && readlistItem.push(readlists);
    }

    setReadlist(readlistItem);
  }, []);

  const handleRemoveList = id => {
    const remainingList = readlist.filter(read => read.bookId !== id);
    setReadlist(remainingList);

    removeLocalStorage(id);
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="py-8 bg-gray-300 my-8 rounded-lg text-center font-bold text-xl">
        Books
      </h1>
      <div className="flex justify-center mb-8">
        <div className="dropdown dropdown-center">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-green-600 text-white"
          >
            Sort By{' '}
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 1.25L9 8.75L1.5 1.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Pages</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="my-8">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <div>
              {readlist.map(book => (
                <Readlist
                  key={book.bookId}
                  book={book}
                  handleRemoveList={handleRemoveList}
                ></Readlist>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BookList;
