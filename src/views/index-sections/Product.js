import React from "react";
import ProductCard from "../../components/ProductCard";
import { mockResult } from "../../helpers/api";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
// core components

function renderProductCard() {
  return mockResult.data[0].newProducts.map(x => {
    return <ProductCard data={x} />;
  });
}

function Product() {
  return (
    <>
      <div
        className="section section-product"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "top center",
          height: "100%"
        }}
      >
        <Container>
          <Row>{renderProductCard()}</Row>
        </Container>
      </div>
    </>
  );
}

export default Product;
