import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [menuOpen,setMenuOpen]=useState(false)
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }
  const {displayName,photoURL}=user || {}




  return (
    <div className="gradient-bg py-2">
      <div className="px-4">
        <div className="hidden mx-auto md:flex justify-between items-center">
          <div className="flex flex-col items-center">
            <img
              className="w-12 h-12 rounded-full "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4hPSu2Pox7FiE4ZBZnJqEn708qIJgzopqAQ&usqp=CAU"
              alt=""
            />
            <h2 className="text-3xl text-white font-bold">BrainyBox</h2>
          </div>
          <div className="flex items-center gap-4">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
            <NavLink
              to="/allToys"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              All Toys
            </NavLink>
            {user ? (
              <div className="flex items-center gap-4">
                <NavLink
                  to="/myToys"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  My Toys
                </NavLink>
                <NavLink
                  to="/addToy"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Add Toy
                </NavLink>
                <Link onClick={handleLogOut} className="default">
                  Log Out
                </Link>
                <img
                  className="w-12 rounded-full cursor-pointer"
                  src={photoURL}
                  alt="user"
                  title={displayName}
                />
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>

      {/* mobile responsive */}
      <div className="flex justify-between px-2 md:hidden">
        <div className="flex flex-col items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4hPSu2Pox7FiE4ZBZnJqEn708qIJgzopqAQ&usqp=CAU"
            alt=""
          />
          <h2 className="text-2xl text-white font-bold">BrainyBox</h2>
        </div>
        <div>
          <div>
            {!menuOpen && (
              <Bars3Icon
                onClick={() => setMenuOpen(true)}
                className="h-7 w-7 text-black"
              />
            )}
            {menuOpen && (
              <XCircleIcon
                onClick={() => setMenuOpen(false)}
                className="h-7 w-7 text-black my-2"
              />
            )}
          </div>
          <div className={`space-y-1 ${menuOpen ? "flex flex-col" : "hidden"}`}>
            {user && (
              <img
                className="w-12 rounded-full cursor-pointer"
                src={photoURL}
                alt="user"
                title={displayName}
              />
            )}
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
            <NavLink
              to="/allToys"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              All Toys
            </NavLink>
            {user ? (
              <div className="flex flex-col space-y-1">
                <NavLink
                  to="/myToys"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  My Toys
                </NavLink>
                <NavLink
                  to="/addToy"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Add Toy
                </NavLink>
                <Link onClick={handleLogOut} className="default">
                  Log Out
                </Link>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
