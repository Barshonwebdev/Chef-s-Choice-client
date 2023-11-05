import { useContext } from 'react';
import './Login.css'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";


const Login = () => {
  const {googleSignIn}=useContext(AuthContext);
  const signInwithGoogle=()=>{
    googleSignIn()
    .then(result=>{
      const loggedInUser=result.user;
      console.log(loggedInUser);
    })
  }
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
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-secondary ">
                Login
              </button>
            </div>
            <p className="text-center mt-3">
              New here?{" "}
              <Link className="text-color text-decoration-none" to="/register">
                Register!
              </Link>
            </p>
            <p className="text-center">Or...</p>
            <Button
              variant="light"
              className="zoom me-2"
              onClick={signInwithGoogle}
            >
              <FcGoogle className='fs-4 me-1'></FcGoogle>Sign In
            </Button>
            <Button
              variant="light"
              className="zoom"
              onClick={signInwithGoogle}
            >
              <FaFacebookF className='fs-5 me-1 text-primary'></FaFacebookF>Log In
            </Button>
          </form>
        </Card>
      </div>
    );
};

export default Login;