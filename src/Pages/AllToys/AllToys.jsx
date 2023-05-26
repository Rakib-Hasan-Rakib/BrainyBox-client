import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [searchValue, setSearchValue] = useState("");
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys);

  useTitle("All Toys");

  const handleSearch = () => {
    fetch(`https://brainy-box-server.vercel.app/searchedToy/${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  return (
    <div className="my-12">
      <h2 className="gradient-title py-8">all toys of our user</h2>
      <div className="w-full mx-auto flex justify-center gap-2 mb-8">
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs focus:outline-none"
        />
        <button onClick={handleSearch} className="custom-btn">
          Search
        </button>
      </div>
      <div className="w-full">
        <table className="table w-full border border-fuchsia-500">
          <thead>
            <tr className="text-center">
              <th>Toy</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Sub Category</th>
              <th>Avilable Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <tr key={toy._id} className="text-center">
                <td className="flex justify-center">
                  <div className="flex items-center justify-center">
                    <img
                      src={toy.photo}
                      className=" w-18 h-16 rounded-full"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </td>
                <td>{toy.toyName}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.quantity}</td>
                <td>{toy.price}</td>
                <td className="">
                  <Link to={`/allToys/${toy._id}`} className="custom-btn">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
