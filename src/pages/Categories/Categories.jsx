import React from 'react';
import './categories.css'
import { Col, Container, Row } from 'react-bootstrap';
import { BiBowlRice } from "react-icons/bi";
import { TbMeat } from "react-icons/tb";
import { PiFish } from "react-icons/pi";
import { LuSalad } from "react-icons/lu";
import { LuCakeSlice } from "react-icons/lu";
import { BiDrink } from "react-icons/bi";
const Categories = () => {
    return (
      <div>
        <div className="mt-5 mb-5">
          <p className="text-center fs-3 mb-4">Our <span className='food-category-font'> Recipe </span> Categories</p>
          <Container>
            <Row className="">
              <Col
                className=" d-flex justify-content-end align-items-center "
                xs={6}
              >
                <h3 className="icon me-2 food-category-font">Rice</h3>
                <BiBowlRice className="icon fs-1 scale"></BiBowlRice>
              </Col>
              <Col
                className=" d-flex justify-content-start align-items-center "
                xs={6}
              >
                <h3 className="icon me-2 food-category-font">Meat</h3>
                <TbMeat className="icon fs-1 scale"></TbMeat>
              </Col>
            </Row>
            <Row className="">
              <Col
                className=" d-flex justify-content-end align-items-center "
                xs={6}
              >
                <h3 className="icon me-2 food-category-font">Fish</h3>
                <PiFish className="icon fs-1 scale"></PiFish>
              </Col>
              <Col
                className=" d-flex justify-content-start align-items-center "
                xs={6}
              >
                <h3 className="icon me-2 food-category-font">Salad</h3>
                <LuSalad className="icon fs-1 scale"></LuSalad>
              </Col>
            </Row>
            <Row className="">
              <Col
                className=" d-flex justify-content-end align-items-center "
                xs={6}
              >
                <h3 className="icon me-2 food-category-font">Dessert</h3>
                <LuCakeSlice className="icon fs-1 scale"></LuCakeSlice>
              </Col>
              <Col
                className=" d-flex justify-content-start align-items-center "
                xs={6}
              >
                <h3 className="icon food-category-font">Drinks</h3>
                <BiDrink className="icon fs-1 scale"></BiDrink>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
};

export default Categories;