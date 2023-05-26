import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://brainy-box-server.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete this toy?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brainy-box-server.vercel.app/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = myToys.filter((myToy) => myToy._id !== id);
              setMyToys(remaining);
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="my-12">
      <h2 className="gradient-title py-8">My Toys</h2>
      <div className="w-full">
        <table className="table w-full border border-red-500">
          <thead>
            <tr className="grid grid-cols-5 gap-2 text-center">
              <th>Toy</th>
              <th>Name</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy) => (
              <tr
                key={myToy._id}
                className="grid grid-cols-5 items-center gap-2 text-center"
              >
                <td className="flex justify-center">
                  <div className="flex items-center justify-center">
                    <img
                      src={myToy.photo}
                      className=" w-18 h-16 rounded-full"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </td>
                <td>{myToy.toyName}</td>
                <td>{myToy.rating}</td>
                <td>{myToy.price}</td>
                <td className="flex justify-center gap-4">
                  <Link to={`/myToys/${myToy._id}`}>
                    <PencilSquareIcon
                      className="h-6 w-6 text-blue-500 cursor-pointer"
                      title="update"
                    />
                  </Link>
                  <TrashIcon
                    onClick={() => handleDelete(myToy._id)}
                    className="h-6 w-6 text-red-500 cursor-pointer"
                    title="delete"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
