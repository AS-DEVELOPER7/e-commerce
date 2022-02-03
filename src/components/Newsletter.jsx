import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 60vh;
  background: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 4em;
  font-weight: bold;
  margin-bottom: 0.5em;
`;
const Desc = styled.div`
  font-size: 1em;
  font-weight: 400;
  margin-bottom: 1em;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 3em;
  //   background: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
`;
const Input = styled.input`
  border: none;
  flex: 7;
  padding-left: 1em;
`;
const Button = styled.button`
  flex: 1;
  background: teal;
  border: none;
`;
export default function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Desc>
      <InputContainer>
        <Input placeholder="Your Email....." />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}
