import React from 'react';
import { NavLink } from 'react-router';
 
const Navbar = () => {
    const links = <>
        <NavLink to='/' className='m-2 font-semibold border-2 border-green-600 text-green-600 hover:text-white hover:bg-green-600 rounded-sm py-1 px-2'>Home</NavLink>
        <NavLink to='/listBooks' className='m-2 font-semibold border-2 border-green-600 text-green-600 hover:text-white hover:bg-green-600 rounded-sm py-1 px-2'>Listed Books</NavLink>
        <NavLink to='/Pages to Read' className='m-2 font-semibold border-2 border-green-600 text-green-600 hover:text-white hover:bg-green-600 rounded-sm py-1 px-2'> Pages to Read</NavLink>
    </>
    return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className=" sm:text-xl text-lg sm:font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className=" py-1.5 font-semibold px-3 sm:m-2 m-1 rounded-sm bg-green-600 text-white">Sign In</a>
    <a className=" py-1.5 font-semibold px-3 sm:m-2 rounded-sm bg-blue-600 text-white">Sign Up</a>
  </div>
</div>
    );
};

export default Navbar;