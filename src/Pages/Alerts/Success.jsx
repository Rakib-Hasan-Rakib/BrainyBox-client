import React from "react";
import Swal from "sweetalert2";

const Success = (message) => {
  return Swal.fire({
    title: "Great!",
    text: message,
    icon: "success",
    confirmButtonText: "Ok",
  });
};

export default Success;
