import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';

const departments = ['Kitchen', 'Clothing', 'Toys'];

const Departments = () => {
  return (
    <Container>
      <Row>
        {departments.map((department, index) => (
          <Col key={index} xs={12} md={4} className="mb-4">
            <Link to={`/department/${department}`}>
              <Card>
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
