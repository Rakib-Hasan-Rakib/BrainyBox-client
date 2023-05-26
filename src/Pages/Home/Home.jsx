import React from "react";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import Banner from "./Banner/Banner";
import SellerProfile from "./SellerProfile/SellerProfile";
import Sponsors from "./Sponsors/Sponsors";
import useTitle from "../../hooks/useTitle";
import ToyTabs from "./Tabs/ToyTabs";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  useTitle('Home')
  return (
    <div>
      <Banner />
      <PhotoGallery />
      <ToyTabs />
      <div data-aos="fade-up">
        <SellerProfile />
      </div>

      <Sponsors />
    </div>
  );
};

export default Home;
