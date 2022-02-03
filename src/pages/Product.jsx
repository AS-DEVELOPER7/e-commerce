import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcment from "../components/Announcment";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 2em;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 2em;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const Title = styled.h1`
  font-weight: bold;
  opacity: 0.9;
`;
const Desc = styled.p`
  margin: 1em 0;
  letter-spacing: 2px;
`;
const Price = styled.span`
  font-size: 2em;
  font-weight: bold;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 1.5em 0;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 1.1em;
  font-weight: 400;
  margin: 0 0.5em;
`;
const FilterColor = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background: ${(props) => props.color};
  margin: 0 0.3em;
  cursor: pointer;
`;

const FilterSize = styled.select`
  padding: 0.1em 0.2em;
  border: none;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5%;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 5%;
  background: teal;
  border: 1px solid teal;
  border-radius: 1em;
  color: white;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
const Linkb = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;
export default function Product() {
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Id in irure excepteur fugiat eu dolore duis do qui. Tempor tempor
            tempor officia mollit culpa aute nisi quis laborum. Dolor cupidatat
            voluptate incididunt mollit eu ad ex id amet est amet minim aliquip.
            Deserunt ea ipsum eiusmod dolore anim minim esse culpa adipisicing
            ut enim.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
              <FilterColor />
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>
              <Linkb to="/cart">ADD TO CART</Linkb>
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}
