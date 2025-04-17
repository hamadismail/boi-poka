import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import Error from '../pages/Error/Error';
import BookDetails from '../components/BookDetails/BookDetails';
import BookList from '../pages/BookList/BookList';

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
        Component: BookList,
      },
      {
        path: 'book/:bookId',
        loader: () => fetch(`/booksData.json`),
        Component: BookDetails,
      },
    ],
  },
]);
