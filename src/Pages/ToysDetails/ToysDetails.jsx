import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToysDetails = () => {
  useTitle('Toy Details')
  const loadedToy = useLoaderData();
  console.log(loadedToy);
  const {
    toyName,
    sellerName,
    email,
    photo,
    subCategory,
    price,
    rating,
    quantity,
    description,
  } = loadedToy;

  return (
    <div className="border border-red-500 bg-gradient-to-r from-cyan-500 to-blue-500 w-full md:w-3/5 mx-2 md:mx-auto my-12 rounded-md">
      <div className=" p-4">
        <div>
          <div className="flex justify-center">
            <img className="w-fit h-48 rounded-xl" src={photo} alt="" />
          </div>
          <h2 className="text-3xl text-center text-white font-bold">
            {toyName}
          </h2>
        </div>
        <div className="my-6">
          <div>
            <h2 className="text-xl font-bold text-white">Seller Info:</h2>
            <p>
              <span className="text-lg font-bold">Seller name</span> :{" "}
              {sellerName}
            </p>
            <p>
              <span className="text-lg font-bold">Email</span> : {email}
            </p>
          </div>
          <div className="space-y-1 my-8">
            <h2 className="text-xl font-bold text-white">Toy Info:</h2>
            <p>
              <span className="text-lg font-bold">Toy Description : </span>
              <br />{" "}
              <span className="block p-1">
                {description}
              </span>
            </p>
            <p>
              <span className="text-lg font-bold">Sub Category </span> :{" "}
              {subCategory}
            </p>
            <p>
              <span className="text-lg font-bold">Rating</span> : {rating}
            </p>
            <p>
              <span className="text-lg font-bold">Available Quantity </span> :{" "}
              {quantity}
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

export default ToysDetails;
