import React from 'react';
import './Login.css'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
        <Card className="p-5 bg-dark text-light">
          <form>
            <h3 className="headline text-color text-center mb-3 scale">
              Chef`s Choice
            </h3>
            <h3 className="headline text-center mb-3">Login</h3>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="enter your email "
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="enter your password "
              />
            </div>
            <div className='d-flex justify-content-center'>
              <button type="submit" className="btn btn-secondary ">
                Login
              </button>
            </div>
            <p className='text-center mt-3'>New here? <Link className='text-color text-decoration-none' to='/register'>Register!</Link></p>
          </form>
        </Card>
      </div>
    );
};

export default Login;