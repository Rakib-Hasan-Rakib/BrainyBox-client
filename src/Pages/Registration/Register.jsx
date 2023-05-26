import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Success from "../Alerts/Success";
import showError from "../Alerts/ErrorAlert";
import Loader from "../../Loader/Loader";

const Register = () => {
  useTitle('Register')
  const { createUser, updateUser, loading, setLoading } =
    useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    createUser(email, password)
      .then((res) => {
        updateUser(name, photo)
        Success('Your Accout Created Successfully')
        form.reset();
      })
      .catch((error) => {
        showError(`${error.message}`);
         setLoading(false);
      });
  };
  return (
    <div className="form-background w-full h-[90vh]">
      <div className="hero">
        <div className="z-10">{loading && <Loader />}</div>
        <div className="hero-content w-full flex flex-col items-center justify-center">
          <div className="card my-12 w-2/5 bg-transparent backdrop-blur-md border border-white">
            <div className="card-body">
              <h1 className="text-xl md:text-3xl text-white font-bold text-center">
                Please Register
              </h1>
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white md:text-xl">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name Here"
                    name="name"
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
                    placeholder="Enter Your Email Here"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white md:text-xl">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Your Password Here"
                    name="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white md:text-xl">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Photo URL Here"
                    name="photo"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="border border-white py-3 rounded-xl text-white font-semibold"
                    type="submit"
                    value="Register"
                  />
                </div>
              </form>
              <p className="text-center mt-6 text-white">
                Already have account?
                <Link
                  className="text-white font-bold hover:border-b hover:border-white"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
