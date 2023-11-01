import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div>
        <div className="mt-4 d-flex justify-content-center align-items-center">
          <h2 className=" text-danger me-4">404! Page not found!</h2>
          <Link to='/'>
            <button className="btn btn-primary">Go back</button>
          </Link>
        </div>
        <div className="mt-2 mb-5 d-flex justify-content-center ">
          <img
            className="img-fluid w-50 rounded rounded-lg"
            src="../../../not-found.jpg"
            alt=""
          />
        </div>
      </div>
    );
};

export default NotFound;