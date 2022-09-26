import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../Components/Product";

export default function HomeScreen() {
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </>
  );
}