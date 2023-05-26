import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Success from "../Alerts/Success";
import showError from "../Alerts/ErrorAlert";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  useTitle("Add Toy");
  const handleAddToy = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyName = form.toyName.value;
    const sellerName = user?.displayName;
    const email = user?.email;
    const photo = form.toyPhoto.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const addToyDetails = {
      toyName,
      sellerName,
      email,
      photo,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    if (parseFloat(rating) <= 5) {
      fetch("https://brainy-box-server.vercel.app/addedToy", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(addToyDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Success();
            form.reset();
          }
        });
    } else {
      showError("You have to rate this out of 5");
    }
  };

  return (
    <div className=" form-background w-full">
      <div className="hero">
        <div className="hero-content w-full flex flex-col items-center justify-center">
          <div className="card my-12 w-4/5 bg-transparent backdrop-blur-md border border-white">
            <div className="card-body backdrop-blur-3xl">
              <h1 className="text-xl md:text-3xl text-white font-bold text-center md:my-8">
                Please Add Your Toy Details
              </h1>
              <form onSubmit={handleAddToy}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white md:text-xl">
                          Toy Name
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Toy Name Here"
                        name="toyName"
                        required
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white md:text-xl">
                          Toy Photo URL
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Toy's Photo URL Here"
                        name="toyPhoto"
                        required
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white md:text-xl">
                          Sub Category
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Toy's Sub Category Here"
                        name="subCategory"
                        required
                        className="input input-bordered"
                      />
                    </div>
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
                  </div>

                  <div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white md:text-xl">
                          Seller Name
                        </span>
                      </label>
                      <input
                        type="text"
                        value={user?.displayName}
                        readOnly
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white md:text-xl">
                          Email
                        </span>
                      </label>
                      <input
                        type="email"
                        value={user?.email}
                        readOnly
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white md:text-xl">
                          Rating
                        </span>
                      </label>
                      <input
                        type="text"
                        name="rating"
                        required
                        placeholder="Rate This Out of 5"
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
                    value="Add Toy"
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

export default AddToy;
