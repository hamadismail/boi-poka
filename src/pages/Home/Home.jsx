import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../../components/Books/Books';

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <Books></Books>
    </div>
  );
};

export default Home;
