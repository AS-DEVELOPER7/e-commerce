import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { popularProducts } from "../Data";
import Product from "./Product";
const Container = styled.div`
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Linkv = styled(Link)`
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;
const Button = styled.button`
  background: teal;
  border: none;
  padding: 1em 4em;
  margin: 1em auto;
  border-radius: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Linkp = styled(Link)``;

export default function Products() {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Linkp to="/product">
          <Product item={item} key={item.id} />
        </Linkp>
      ))}
      <Button>
        <Linkv to="/product-list">view more</Linkv>
      </Button>
    </Container>
  );
}
