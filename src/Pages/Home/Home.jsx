import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
// import BookDetails from '../BookDetails/BookDetails';
 
const Home = () => {
     const data =useLoaderData()
     console.log(data)
    return (
        <div>
           <Banner></Banner>
           <Books data={data}></Books>
           {/* <BookDetails></BookDetails> */}
          
        </div>
    );
};

export default Home;