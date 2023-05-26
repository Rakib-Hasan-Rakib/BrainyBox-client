import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Register";
import ProtectedRoute from "./ProtectedRoute";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import ToysDetails from "../Pages/ToysDetails/ToysDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import Blog from "../Pages/Blog/Blog";
import TabToyDetails from "../Pages/Home/Tabs/TabToyDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tabToys/:id",
        element: (
          <ProtectedRoute>
            <TabToyDetails />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brainy-box-server.vercel.app/tabToys/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
        loader: () => fetch("https://brainy-box-server.vercel.app/allToys"),
      },
      {
        path: "allToys/:id",
        element: (
          <ProtectedRoute>
            <ToysDetails />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brainy-box-server.vercel.app/allToys/${params.id}`),
      },
      {
        path: "addToy",
        element: (
          <ProtectedRoute>
            <AddToy />
          </ProtectedRoute>
        ),
      },
      {
        path: "/myToys",
        element: (
          <ProtectedRoute>
            <MyToys />
          </ProtectedRoute>
        ),
      },
      {
        path: "/myToys/:id",
        element: (
          <ProtectedRoute>
            <UpdateToy />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brainy-box-server.vercel.app/toys/${params.id}`),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default Router;
