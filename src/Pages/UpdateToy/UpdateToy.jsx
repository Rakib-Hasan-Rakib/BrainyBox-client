import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Success from "../Alerts/Success";

const UpdateToy = () => {
  useTitle("Update Toy");

  const myToy = useLoaderData();
  console.log(myToy);

  const handleUpdateToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updatedToy = { price, quantity, description };

    fetch(`https://brainy-box-server.vercel.app/myToys/${myToy._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Success("Your toy detail has been updated");
        }
      });
  };

  return (
    <div className=" form-background w-full h-[90vh]">
      <div className="hero">
        <div className="hero-content w-full flex flex-col items-center justify-center">
          <div className="card my-12 w-3/5 bg-transparent backdrop-blur-md border border-white">
            <div className="card-body backdrop-blur-3xl">
              <h1 className="text-xl md:text-3xl text-white font-bold text-center md:my-8">
                Update Your Toy Details
              </h1>
              <form onSubmit={handleUpdateToy}>
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white md:text-xl">
                        Price
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Enter Your Toy's Price Here"
                      name="price"
                      required
                      className="input input-bordered"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white md:text-xl">
                        Available Quantity
                      </span>
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      required
                      placeholder="Enter Your Available Quantity Here"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-white md:text-xl">
                      Toy Description
                    </span>
                  </label>
                  <textarea
                    className="textarea w-full "
                    name="description"
                    required
                    placeholder="Enter a detail description of your toy"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="border border-white py-3 rounded-xl text-white font-bold custom-btn"
                    type="submit"
                    value="Update Toy"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
