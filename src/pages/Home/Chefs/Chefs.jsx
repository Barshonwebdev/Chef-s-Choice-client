import React from "react";
import { Container, Row } from "react-bootstrap";
import EachChef from "./EachChef/EachChef";
import { useState } from "react";
import { useEffect } from "react";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch(
      "https://chef-s-choice-server-62t4ewudt-barshons-projects.vercel.app"
    )
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <div>
      <Container>
        <div className="mt-5">
          <h4 className="headline mb-5">Our Renowned Chefs</h4>
          <div>
            <Row xs={1} md={2} className="g-4">
              {chefs.map((chef) => (
                <EachChef chef={chef} key={chef.id}></EachChef>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Chefs;
