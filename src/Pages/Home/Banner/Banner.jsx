import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
      <div>
        <div className="banner my-6 text-white flex items-center justify-center rounded-md">
          <div className="space-y-5 w-4/5 md:w-2/5">
            <h2 className="text-white font-bold text-center text-4xl md:text-6xl">
              Brainy Box
            </h2>
            <p className="text-lg md:text-2xl font-semibold text-center">
              The Ultimate Toy Destination. Where Imagination Comes to Life
            </p>
            <div className='flex justify-center gap-4'>
              <Link to="allToys">
                <button className="custom-btn">All Toys</button>
              </Link>
              <Link to="addToy">
                <button className="custom-btn">Add Toys</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;