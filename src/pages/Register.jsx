import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 1em;
`;
const Title = styled.h1`
  color: teal;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1em;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  color: gray;
  outline: none;
  border: none;
  border-bottom: 1px solid rgb(0, 0, 0, 0.5);
  margin: 0.7em 0;
`;
const Agreement = styled.p`
  letter-spacing: 1px;
  font-size: 0.8em;
  margin: 1em 0;
`;
const Button = styled.button`
  background: teal;
  border: none;
  height: 2.5em;
  border-radius: 1em;
  color: white;
  font-weight: 600;
  letter-spacing: 0.5em;
  margin: 0.7em 0;
`;
const Links = styled(Link)`
  text-decoration: none;
  font-size: 0.8em;
  cursor: pointer;
`;
const Linkss = styled(Link)`
  text-decoration: none;
  font-size: 0.8em;
  cursor: pointer;
  color: white;
  &:hover {
    color: white;
  }
`;
export default function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>REGISTER</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>
            <Linkss to="/">CREATE</Linkss>
          </Button>
          <Links to="/login">ALREADY HAVE AN ACCOUNT</Links>
        </Form>
      </Wrapper>
    </Container>
  );
}
