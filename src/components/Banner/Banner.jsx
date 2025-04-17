import React from 'react';
import bannerImg from '../../assets/books.jpg';
import './banner.css';

const Banner = () => {
  return (
    <div className="hero bg-base-200 md:py-8 md:my-8 my-4 rounded-lg font-playfair">
      <div className="hero-content flex-col lg:flex-row-reverse justify-around">
        <img
          width="450px"
          src={bannerImg}
          className="banner-img rounded-lg shadow-2xl"
        />
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold">
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
