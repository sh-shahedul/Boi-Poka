import React, { Suspense, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    const [allBooks ,setAllBooks] =useState([])
    //   const bookPromise = fetch('./booksData.json')
    //   .then(res=>res.json())

       
    return (
        <div>
               <h1 className=' text-3xl text-center p-6'>Books</h1>
                <Suspense fallback={<h1>Loading....</h1>}>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7 '>
                 {
                 data.map((singelBook)=> <Book key={singelBook.bookId} singelBook={singelBook}></Book>)
               }
              </div>
               </Suspense>
        </div>
    );
};

export default Books;