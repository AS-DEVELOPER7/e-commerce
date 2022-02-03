import styled from "styled-components";
import React from "react";
const Container = styled.div`
  flex: 1;
  padding: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.7em;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  opacity: 0.9;
`;
const Button = styled.button`
  border: none;
  padding: 0.5em;
  border-radius: 1em;
  font-weight: bold;
  cursor: pointer;
`;
export default function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}
