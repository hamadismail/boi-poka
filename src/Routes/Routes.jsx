import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import Error from '../pages/Error/Error';
import BookDetails from '../components/BookDetails/BookDetails';
import BookList from '../pages/BookList/BookList';
import Chart from '../pages/Chart/Chart';
import { PulseLoader } from 'react-spinners';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'books',
        hydrateFallbackElement: (
          <PulseLoader className="mt-8 text-center" color="#2f4f4f" />
        ),
        loader: () => fetch('/booksData.json'),
        Component: BookList,
      },
      {
        path: 'pages',
        hydrateFallbackElement: (
          <PulseLoader className="mt-8 text-center" color="#2f4f4f" />
        ),
        loader: () => fetch('/booksData.json'),
        Component: Chart,
      },
      {
        path: 'book/:bookId',
        hydrateFallbackElement: (
          <PulseLoader className="mt-8 text-center" color="#2f4f4f" />
        ),
        loader: () => fetch('/booksData.json'),
        Component: BookDetails,
      },
    ],
  },
]);
