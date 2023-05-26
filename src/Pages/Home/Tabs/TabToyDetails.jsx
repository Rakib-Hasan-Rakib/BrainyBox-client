import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const TabToyDetails = () => {
  const tabToys = useLoaderData();
  const { picture, name,price,rating } = tabToys;
  return (
    <div className="border border-fuchsia-500 bg-gradient-to-r from-cyan-500 to-blue-500 w-full md:w-2/5 mx-2 md:mx-auto my-12 rounded-md">
      <div className=" p-4">
        <div>
          <div className="flex justify-center">
            <img className="w-fit h-48 rounded-xl" src={picture} alt="" />
          </div>
          <h2 className="text-3xl text-center text-white font-bold">{name}</h2>
        </div>
        <div className="my-6">
          <div className="space-y-1 my-8">
            <p>
              <span className="text-lg font-bold">Rating</span> : {rating}
            </p>
            <p>
              <span className="text-lg font-bold">Price </span> : ${price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabToyDetails;
