import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const links = (
    <>
      <li>
        <NavLink onClick={handleLinkClick} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleLinkClick} to="/books">
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/pages">Pages to read</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm font-worksans">
      <div className="navbar-start">
        <div ref={menuRef}>
          <div
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          {isOpen && (
            <ul className="menu menu-sm bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow absolute">
              {links}
            </ul>
          )}
        </div>
        <a className="btn btn-ghost text-xl">Boi Poka</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn mr-2 bg-green-600 text-white rounded-lg">Sign In</a>
        <a className="btn bg-sky-500 text-white rounded-lg">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
