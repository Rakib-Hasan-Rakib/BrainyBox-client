import React from 'react';
import errorImage from '../../assets/images/error-image.png'
import { Link, useRouteError } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
  const { status, statusText, data } = useRouteError()
  useTitle('Error')

    return (
      <div className="my-12">
        <img className="w-1/2 mx-auto" src={errorImage} alt="" />
        <div className="text-center flex flex-col gap-2">
          <h1 className="gradient-title">{status}</h1>
          <p className="gradient-text">{statusText}</p>
          <p className="gradient-text">{data}</p>
        </div>
        <button className="w-full mx-auto my-6">
          <Link className="custom-btn" to="/">
            Back to Home
          </Link>
        </button>
      </div>
    );
};

export default ErrorPage;