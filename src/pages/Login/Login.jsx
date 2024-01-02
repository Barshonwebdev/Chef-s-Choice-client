import { useContext, useState } from 'react';
import './Login.css'
import { Button, Card } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";



const Login = () => {
  const navigate=useNavigate();
  let location=useLocation();

  const from= location.state?.from?.pathname || '/';
  const {googleSignIn,GitSignIn,signInEmail}=useContext(AuthContext);
  const [error, setError] = useState([]);
  const handleEmailLogin=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const pass=form.pass.value;
    signInEmail(email,pass) 
    .then(result=>{
      const loggedInUser=result.user;
      console.log(loggedInUser);
      navigate(from, {replace:true});
    })
    .catch(error=>{
      console.log(error);
      setError(error.message);
    })
    event.target.reset();
  }
  const signInwithGoogle=()=>{
    googleSignIn()
    .then(result=>{
      const loggedInUser=result.user;
      console.log(loggedInUser);
      navigate(from, { replace: true });
    })
  }
  const GitLogin=()=>{
    GitSignIn()
    .then(resultgit=>{
      const loggedInUsergit=resultgit.user;
      console.log(loggedInUsergit);
      navigate(from, { replace: true });
    })
  }
    return (
      <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
        <Card className="p-5 bg-dark text-light">
          <form onSubmit={handleEmailLogin}>
            <h3 className="headline text-color text-center mb-3 scale">
              Chef`s Choice
            </h3>
            <h3 className="headline text-center mb-3">Login</h3>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
              name='email'
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
              name='pass'
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
              className="zoom me-4"
              onClick={signInwithGoogle}
            >
              <FcGoogle className='fs-4 me-1'></FcGoogle>Sign In
            </Button>
            <Button
              variant="light"
              className="zoom"
              onClick={GitLogin}
            >
              <BsGithub className='fs-5 me-1'></BsGithub>Log In
            </Button>
            <p><small className='text-center text-color'>{error}</small></p>
          </form>
        </Card>
      </div>
    );
};

export default Login;