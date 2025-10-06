import React from 'react';
 import bannerImage from '../../assets/books.jpg'
const Banner = () => {
    return (
          <div className='bg-[#1313130d] rounded-lg'>
        <div className=' sm:flex justify-between items-center w-11/12 mx-auto  p-5'>
            <div>
               <h1 className=' md:text-5xl sm:text-3xl text-3xl font-bold sm:text-left text-center'>Books to freshen up <br />your bookshelf</h1>
              <div className='flex sm:justify-start justify-center'>
                 <button className=' bg-green-600 text-white font-bold mt-8 px-12 py-3 rounded-lg'>View The List</button>
              </div>
            </div>
            <div  className='flex  justify-center'>
               <img   className='sm:w-88 w-85 sm:h-80 h-60 sm:mt-0 mt-8 rounded-lg ' src={bannerImage} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;