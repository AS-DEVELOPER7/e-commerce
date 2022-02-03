import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  // top:0;
  // left:0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;
const Container = styled.div`
  flex: 1;
  cursor: pointer;
  margin: 5px;
  min-width: 17em;
  height: 20em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfb;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  margin: 1em;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: white;
  position: absolute;
`;
export default function Product({ item }) {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
}
