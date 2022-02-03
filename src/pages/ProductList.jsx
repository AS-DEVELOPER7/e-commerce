import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Announcment from "../components/Announcment";
const Container = styled.div``;
const Title = styled.h1`
  margin: 1em;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 1em;
`;
const FilterText = styled.span`
  font-size: 1em;
  font-weight: 600;
  margin-right: 1em;
`;
const Select = styled.select`
  padding: 0.4em;
  margin-right: 1em;
  border: none;
  outline: none;
`;
const Option = styled.option`
  font-size: 1em;
`;
export default function ProductList() {
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Title> Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color{" "}
            </Option>
            <Option> White</Option>
            <Option> Black</Option>
            <Option>Red </Option>
            <Option>Blue </Option>
            <Option> Yellow</Option>
            <Option> Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size{" "}
            </Option>
            <Option> XS</Option>
            <Option> S</Option>
            <Option>M </Option>
            <Option>L </Option>
            <Option> XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}
