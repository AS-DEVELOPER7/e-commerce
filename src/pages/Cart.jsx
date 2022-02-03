import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcment from "../components/Announcment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 1em;
`;
const Title = styled.h1`
  font-weight: 500;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2em 0;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.7em;
  border: ${(props) => (props.type === "filled" ? "none" : "2px solid teal")};
  background: ${(props) => (props.type === "filled" ? "teal" : "transparent")};
  color: ${(props) => (props.type === "filled" ? "white" : "teal")};
  border-radius: 1em;
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  margin: 0 1em;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  diplay: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1em 0;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.span``;
const ProductColor = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background: ${(props) => props.color};
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
`;
const ProductAmount = styled.div`
  font-size: 1em;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;
const Hr = styled.hr`
  background: teal;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 1em;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 600;
`;
const SummaryItem = styled.div`
  margin: 1.1em 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "bold"};
  font-size: ${(props) => props.type === "total" && "1.2em"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  border: none;
  background: teal;
  border-radius: 1em;
  color: white;
  padding: 0.5em 0;
  font-weight: 600;
  letter-spacing: 0.1em;
`;
export default function Cart() {
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Wrapper>
        <Title>YOUR BAG.</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping bag</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image />
                <Details>
                  <ProductName>
                    <b>Product: </b>Jessie thunder shoe
                  </ProductName>
                  <ProductId>
                    <b>Id: </b>135421841349
                  </ProductId>
                  <ProductColor color="gray" />

                  <ProductSize>
                    <b>Size: </b>M
                  </ProductSize>
                </Details>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 30</ProductPrice>
                </PriceDetail>
              </ProductDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image />
                <Details>
                  <ProductName>
                    <b>Product: </b>Jessie thunder shoe
                  </ProductName>
                  <ProductId>
                    <b>Id: </b>135421841349
                  </ProductId>
                  <ProductColor color="gray" />

                  <ProductSize>
                    <b>Size: </b>M
                  </ProductSize>
                </Details>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 30</ProductPrice>
                </PriceDetail>
              </ProductDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 30</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 30</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}
