import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const FAQ = () => {
    return (
      <Container>
        <div className="mt-5 w-75 mx-auto">
          <h4 className="text-color text-center mb-3">FAQ</h4>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                1. What types of Japanese recipes are included in the cookbook?
              </Accordion.Header>
              <Accordion.Body>
                Our cookbook features a diverse range of authentic Japanese
                recipes, including popular dishes such as sushi, ramen, tempura,
                and traditional home-cooked meals.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                2. Are the recipes suitable for beginners?
              </Accordion.Header>
              <Accordion.Body>
                Yes, our cookbook is designed to cater to all skill levels. We
                provide clear, step-by-step instructions along with helpful tips
                and techniques for those new to Japanese cooking.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                3. Can I find recipes for special dietary requirements, such as
                vegetarian or gluten-free options?
              </Accordion.Header>
              <Accordion.Body>
                Absolutely, we understand the importance of catering to various
                dietary needs. Our cookbook offers a selection of vegetarian,
                vegan, and gluten-free Japanese recipes that maintain the
                authentic flavors of the cuisine.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                4. Are the ingredients used in the recipes easy to find outside
                of Japan?
              </Accordion.Header>
              <Accordion.Body>
                Yes, we have carefully curated our recipes to ensure that the
                ingredients are commonly available in most grocery stores
                worldwide or can be easily sourced from Asian markets or online
                retailers.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                5. Do you provide cooking tips specific to Japanese culinary
                techniques?
              </Accordion.Header>
              <Accordion.Body>
                Certainly, our cookbook not only provides detailed recipes but
                also includes useful cooking tips and insights into traditional
                Japanese culinary techniques to help you master the art of
                Japanese cooking in your own kitchen. retailers.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    );
};

export default FAQ;