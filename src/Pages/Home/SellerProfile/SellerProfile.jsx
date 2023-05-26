import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const SellerProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h2 className="gradient-title"> Our best sellers</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="card card-compact w-full border border-fuchsia-500 p-2">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4hPSu2Pox7FiE4ZBZnJqEn708qIJgzopqAQ&usqp=CAU"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Rakib Hasan</h2>
            <p>Total Sell : 221</p>
            <button className="custom-btn">View Detail</button>
          </div>
        </div>
        <div className="card card-compact w-full border border-fuchsia-500 p-2">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4hPSu2Pox7FiE4ZBZnJqEn708qIJgzopqAQ&usqp=CAU"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Abu Bakar</h2>
            <p>Total Sell : 221</p>
            <button className="custom-btn">View Detail</button>
          </div>
        </div>
        <div className="card card-compact w-full border border-fuchsia-500 p-2">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4hPSu2Pox7FiE4ZBZnJqEn708qIJgzopqAQ&usqp=CAU"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ismail Hossain</h2>
            <p>Total Sell : 221</p>
            <button className="custom-btn">View Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
