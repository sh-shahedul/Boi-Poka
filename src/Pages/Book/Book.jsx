import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";


const Book = ({singelBook}) => {

    const {bookName,image,author,rating,category,publisher,bookId}=singelBook
  
    // console.log(singelBook)
    return (
     <Link  to={`/bookDetails/${bookId}`}>
       <div className="card bg-base-100 shadow-sm border border-gray-200 p-5">
  <figure  className="px-8 py-5 bg-gray-200  rounded-lg w-11/11 mx-auto ">
    <img className=" h-[266px]"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body  ">
    <div className="flex justify-start items-center gap-10">
        <h2 className="card-title text-green-600">{category}</h2>
        <h1 className="p-1 rounded-lg bg-green-600 text-white">{publisher}</h1>
        </div>
    <h1 className="sm:text-2xl text-xl font-bold">{bookName}</h1>
    <h3 className=" text-base font-medium text-gray-700" >By : {author}</h3>
    <hr className=" border-dashed border-gray-500 mt-2" />
    <div className="card-actions justify-between text-base font-medium">
      <div className=" ">Fiction</div>
      <div className=" flex justify-center items-center gap-2 ">{rating} <FaRegStar/></div>
    </div>
  </div>
</div>
     </Link>
    );
};

export default Book;