import React from 'react';
import { NavLink } from 'react-router';

const List = ({ list, setIsOpen }) => {
  return (
    <li>
      <NavLink onClick={() => setIsOpen(false)} to={list.path}>
        {list.name}
      </NavLink>
    </li>
  );
};

export default List;
