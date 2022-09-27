import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import Product from '../components/product.component';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
      <main className='py-3'>
        <Container>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </>
  );
};

export default HomeScreen;
