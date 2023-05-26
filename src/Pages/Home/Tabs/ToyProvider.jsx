import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const ToyProvider = (toys) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {toys.map((toy, i) => (
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
          key={i}
          className="card card-compact w-full border border-fuchsia-500 space-y-5 p-2 md:p-4"
        >
          <figure>
            <img src={toy.picture} alt="toys" className="h-52" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center text-xl md:text-2xl text-black font-bold">
              {toy.name}
            </h2>
            <p className="text-lg md:text-xl">Price: ${toy.price}</p>
            <p className="text-lg md:text-xl">Ratings: {toy.rating}</p>
            <div className="card-actions justify-center my-4">
              <Link to={`/tabToys/${toy._id}`}>
                <button className="custom-btn">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToyProvider;
