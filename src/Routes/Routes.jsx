import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import ListsBooks from '../Pages/ListsBooks/ListsBooks';
import BookDetails from '../Pages/BookDetails/BookDetails';



 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
        {
            index: true,
            loader:()=>fetch('../booksData.json'),
            path:'/',
            Component:Home,
        },
        // {
        //     path:'/Listed Books',
        //     Component: ListsBooks,
        // },
        {
            path:'/listBooks',
            loader:()=>fetch('../booksData.json'),
            Component: ListsBooks,
        },
        {
            path: '/bookDetails/:id',
            loader:()=>fetch('../booksData.json'),
            Component:BookDetails,
        },
        
    ]
   
  },
]);