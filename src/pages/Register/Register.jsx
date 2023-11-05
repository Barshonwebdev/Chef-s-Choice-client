import React from 'react';
import './Register.css'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
        <Card className="p-5 bg-dark text-light">
          <form>
            <h3 className="headline text-color text-center mb-3 scale">
              Chef`s Choice
            </h3>
            <h3 className="headline text-center mb-3">Register</h3>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="enter your name "
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="enter your email "
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="enter a unique password "
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Photo url</label>
              <input
                type="url"
                className="form-control"
                placeholder="paste your photo url "
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-secondary ">
                Register
              </button>
            </div>
            <p className="text-center mt-3">
              Already an user? <Link className="text-color text-decoration-none" to="/login">
                 Login!
              </Link>
            </p>
          </form>
        </Card>
      </div>
    );
};

export default Register;