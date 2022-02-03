import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background: black;
  @media only scree and (max-width: 380px) {
  }
`;
const Wrapper = styled.div`
  padding: 10px 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;
const Left = styled.div`
  flex: 1;
  margin-top: 0.4%;
`;
const Center = styled.div`
  flex: 1;
  align-self: center;
`;
const Title = styled(Link)`
  font-weight: bold;
  font-size: 3vh;
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;
const Right = styled.div`
  flex: 1;
  align-self: center;
  display: flex;
  justify-content: space-evenly;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1em;
  padding-right: 0.5em;
  border-radius: 0.5em;
`;
const InputContainer = styled.input`
  background: transparent;
  border: 0;
  color: white;
  padding: 0.2em 0.5em;
  outline: none;
`;
const Linkrl = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <InputContainer type="text" />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Title to="/">LAMA.</Title>
        </Center>
        <Right>
          <Linkrl to="/register">REGISTER</Linkrl>
          <Linkrl to="/login">SIGN-IN</Linkrl>
          <Linkrl to="/cart">
            <Badge badgeContent={5} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Linkrl>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
