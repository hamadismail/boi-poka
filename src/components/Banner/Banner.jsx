import React from 'react';
import bannerImg from '../../assets/books.jpg';

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-8 my-8 rounded-lg font-playfair">
      <div className="hero-content flex-col lg:flex-row-reverse justify-around">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn mt-8 bg-green-600 font-worksans text-white">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
