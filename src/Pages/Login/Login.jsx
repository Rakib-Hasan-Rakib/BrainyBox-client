import React, { useContext } from "react";
import googleLogo from "../../assets/images/google-logo.png";
import githubLogo from "../../assets/images/github-logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Loader from "../../Loader/Loader";
import showError from "../Alerts/ErrorAlert";
import Success from "../Alerts/Success";

const Login = () => {
  useTitle("Login");
  const { loading, setLoading, googleLogin, githubLogin, loginUser } =
    useContext(AuthContext);

  let navigate = useNavigate();
  let location = useLocation();

  let from = location?.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        Success("You successfully logged in");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        showError(`${error.message}`);
        setLoading(false);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        Success("You successfully logged in");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        showError(`${error.message}`);
        setLoading(false);
      });
  };
  const handleUserLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((res) => {
        Success("You successfully logged in");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        showError(`${error.message}`);
        setLoading(false);
      });
  };

  return (
    <div className=" form-background w-full">
      <div className="hero">
        <div className="z-10">{loading && <Loader />}</div>
        <div className="hero-content w-full flex flex-col items-center justify-center">
          <div className="card my-12 w-2/5 bg-transparent backdrop-blur-md border border-white">
            <div className="card-body backdrop-blur-3xl">
              <h1 className="text-xl md:text-3xl text-white font-bold text-center">
                Please Login
              </h1>
              <form onSubmit={handleUserLogin}>
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
                    name="password"
                    placeholder="Enter Your Password Here"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="border border-white py-3 rounded-xl text-white font-bold hover:bg-blue-600 hover:bg-opacity-30"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <div className="text-center">
                <p className="text-white">or login with</p> <br />
                <div className="flex justify-center items-center gap-4">
                  <img
                    onClick={handleGoogleLogin}
                    src={googleLogo}
                    className="w-14 cursor-pointer"
                    alt="Google icon for log in"
                  />
                  <img
                    onClick={handleGithubLogin}
                    src={githubLogo}
                    className="w-14 cursor-pointer"
                    alt="Github icon for log in"
                  />
                </div>
              </div>
              <p className="text-center text-white mt-6">
                Do not have account yet?{" "}
                <Link
                  className="text-white font-bold hover:border-b hover:border-white"
                  to="/register"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
