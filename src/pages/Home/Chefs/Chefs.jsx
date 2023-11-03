import React from 'react';
import { Container, Row } from 'react-bootstrap';
import EachChef from './EachChef/EachChef';
import { useState } from 'react';
import { useEffect } from 'react';

const Chefs = () => {
  const [chefs,setChefs]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/chefs")
    .then(res=>res.json())
    .then(data=>setChefs(data))
  },[])
    return (
      <div>
        <Container>
          <div className="mt-5">
            <h4 className="headline mb-5">Our Renowned Chefs</h4>
            <div>
              <Row xs={1} md={3} className="g-4">
                {
                  chefs.map(chef=><EachChef key={chef.id}></EachChef>)
                }
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Chefs;