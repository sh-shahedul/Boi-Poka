import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDb } from "../../Utility/addToDb";

const BookDetails = () => {


  const { id } = useParams();
  const newId = parseInt(id);
  console.log(id);
  const data = useLoaderData();
  console.log(data);
  const singelBoook = data.find((book) => book.bookId === newId);
  console.log(singelBoook);
  
   const{image,bookName,author,review,totalPages,tags,publisher,yearOfPublishing,category,rating} =singelBoook ||{}

   
  const handelMarkRead = (id)=>{
   addToStoredDb(id)

  }





  return (
    <div className=" sm:flex justify-between items-center shadow-sm">
 <figure  className=" sm:p-20 p-5 bg-gray-200  rounded-lg  ">
    <img className="max-h-[500px] max-w-[425px]  "
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body flex-1">
    <h2 className=" text-3xl font-bold">{bookName}</h2>
    <p className="text-base text-gray-600 font font-semibold"> By : {author}</p>
     <hr className="text-gray-300" />
    <p className="text-base text-gray-600 font font-semibold">{category}</p>
      <hr className="text-gray-300" />
    <p className="text-base text-gray-600"><span className="text-black font-bold text-base">Review :</span> {review}</p>
    <p className=" font-bold flex gap-5"><span >Tag : </span>
       {
        tags.map(tag=> <h1 className="text-green-600 font-bold">#{tag}</h1>)
       }
     </p>
     <hr className="text-gray-300" />
     <div className="max-w-[400px] ">
        <div className=" flex justify-between items-center  gap-24">
       <h3  className="text-base text-gray-600 font font-semibold" > Number of Pages :</h3>
       <h2 className="text-black font-semibold text-base">{totalPages}</h2>
     </div>
     <div className=" flex  justify-between gap-24">
       <h3  className="text-base text-gray-600 font font-semibold"> Publisher :</h3>
       <h2 className="text-black font-semibold text-base">{publisher}</h2>
     </div>
     <div className=" flex  justify-between gap-24">
       <h3  className="text-base text-gray-600 font font-semibold" >Year of Publishing :</h3>
       <h2 className="text-black font-semibold text-base">{yearOfPublishing}</h2>
     </div>
     <div className=" flex  justify-between  gap-24">
       <h3 className="text-base text-gray-600 font font-semibold"> Rating :</h3>
       <h2 className="text-black font-semibold text-base">{rating}</h2>
     </div>
     </div>
     
     
    
    <div className="card-actions justify-start">
      <button onClick={()=>handelMarkRead(id)} className="btn "> Mark To Read</button>
      <button className="btn btn-primary"> Add TO Wishlist</button>
    </div>
  </div>
</div>
  );
};

export default BookDetails;
