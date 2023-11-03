import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Chefs = () => {
    return (
      <div>
        <Container>
          <div className="mt-5">
            <h4 className="headline mb-5">Our Renowned Chefs</h4>
            <div>
              <Row xs={1} md={3} className="g-4">

              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Chefs;