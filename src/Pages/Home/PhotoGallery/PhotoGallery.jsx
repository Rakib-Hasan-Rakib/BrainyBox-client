import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "https://i.ibb.co/HF2dFyK/write-toy-1.jpg",
  "https://i.ibb.co/Vtf7ZDy/write-toy-2.jpg",
  "https://i.ibb.co/gTDj5Tm/write-toy-3.jpg",
  "https://i.ibb.co/ydSG2QH/math-toy-1.jpg",
  "https://i.ibb.co/TYK2x6s/math-toy-2.jpg",
  "https://i.ibb.co/FXL7gsW/math-toy-3.jpg",
  "https://i.ibb.co/8x9PxMF/science-toy-1.jpg",
  "https://i.ibb.co/SQSrnP4/science-toy-2.jpg",
  "https://i.ibb.co/Pr3tPS0/science-toy-3.jpg",
];

const PhotoGallery = () => {
  const [fullImage, setFullImage] = useState({ image: "", i: 0 });

  const viewPhoto = (image, i) => {
    setFullImage({ image, i });
  };

  const cancelPhoto = () => {
    setFullImage({ image: "", i: 0 });
  };

  return (
    <div>
      <h2 className="gradient-title">Toy Gallery</h2>
      {fullImage.image && (
        <div className="w-[100%] h-[100%] bg-white flex justify-center items-center overflow-hidden fixed top-0">
          <button
            onClick={() => cancelPhoto()}
            className="absolute top-20 right-20 text-3xl font-bold text-white bg-black p-2 rounded-md"
          >
            X
          </button>
          <img
            src={fullImage.image}
            alt=""
            className="w-auto max-w-[100%] max-h-[100%]"
          />
        </div>
      )}
      <div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                className="w-full block cursor-pointer"
                onClick={() => viewPhoto(image, i)}
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default PhotoGallery;
