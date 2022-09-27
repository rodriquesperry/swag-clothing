import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright <a href='rockdigital.agency'>Rock Digital</a> &copy;2022
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
