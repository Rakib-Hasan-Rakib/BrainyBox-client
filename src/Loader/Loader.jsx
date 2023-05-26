import React from 'react';
import BeatLoader from "react-spinners/ClipLoader";



const override = {
  display: "block",
  margin: "0 auto",
  position: "absolute",
  top: "45%",
  left: "45%",
  
};


const Loader = () => {
    return (
      <BeatLoader
        color="cyan"
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
};

export default Loader;