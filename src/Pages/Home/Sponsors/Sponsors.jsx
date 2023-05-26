import React from "react";
import Marquee from "react-fast-marquee";
const images = [
  "https://i.ibb.co/YTjDJJh/eduplay.png",
  "https://i.ibb.co/KK0qQT2/eduquest.png",
  "https://i.ibb.co/8P7CT5q/EduSpark.jpg",
  "https://i.ibb.co/v199sP2/learnfinity.png",
  "https://i.ibb.co/g4G8wSk/learnlab.png",
  "https://i.ibb.co/zr8cgNw/Wise-Wonders.png",
];

const Sponsors = () => {
  return (
    <div className="my-8 md:my-12">
      <h2 className="gradient-title">Our Sponsors</h2>
      <Marquee pauseOnHover>
        {images.map((imgLink, i) => (
          <img className="w-40 mx-8" src={imgLink} alt="" key={i} />
        ))}
      </Marquee>
    </div>
  );
};

export default Sponsors;
