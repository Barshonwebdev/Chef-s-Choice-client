import React from 'react';
import './Footer.css'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
    return (
      <div className="bg justify-content-center d-flex flex-column align-items-center">
        <div className=" boxed d-flex flex-column align-items-center">
          <h1 className="fw-bolder title ">Chef`s Choice</h1>
          <small className="fw-bolder text-uppercase">
            Ultimate Japanese cookbook of chefs{" "}
          </small>
        </div>
        <div className="mt-3 d-flex align-items-center">
          <AiFillLinkedin className="me-2 fs-5 scale"></AiFillLinkedin>
          <BsFacebook className="me-5 scale text-primary"></BsFacebook>
          <BsInstagram className="me-2 scale text-danger"></BsInstagram>
          <FiTwitter className="scale text-info"></FiTwitter>
        </div>
        <small className="copyright ">
          2023, Chef`s Choice. All rights reserved
        </small>
      </div>
    );
};

export default Footer;