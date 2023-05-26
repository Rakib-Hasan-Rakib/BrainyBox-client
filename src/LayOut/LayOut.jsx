import React from "react";
import Header from "../Pages/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";

const LayOut = () => {
  return (
    <div className="px-2 md:px-0 md:w-11/12 mx-auto">
      <Header />
      <div className="min-h-[calc(100vh-150px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayOut;
