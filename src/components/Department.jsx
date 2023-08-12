import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";

const departments = ['Kitchen', 'Clothing', 'Toys'];

const Departments = () => {

    const { department } = useParams();
    console.log(department);
  return (
    <Container>
      <Row>
        {departments.map((department, index) => (
          <Col key={index} xs={12} md={4} className="mb-4">
            <Link to={`/ProductList/${department}`}>
              <Card >

                <Card.Body>
                  <Card.Title>{department}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Departments;
