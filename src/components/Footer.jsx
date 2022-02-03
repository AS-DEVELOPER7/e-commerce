import React from "react";
import styled from "styled-components";
import {
  Instagram,
  Facebook,
  Pinterest,
  Twitter,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1em;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 1em 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  color: white;
  background: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5em;
`;
const Center = styled.div`
  flex: 1;
  padding: 1em;
`;
const Title = styled.h3`
  margin-bottom: 1em;
  text-align: center;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 1em;
`;
const Right = styled.div`
  flex: 1;
  padding: 1em;
`;
const ContactItem = styled.div`
  margin-bottom: 1em;
  display: flex;
  align-items: center;
`;
const Payment = styled.img``;
export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In sequi
          consequuntur iure nesciunt quae reprehenderit architecto quibusdam
          quis ea quaerat!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fasion</ListItem>
          <ListItem>Woamn Fasion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Watchlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Hathipole,Udaipur,Rajasthan
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +91 7665212079
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          alihussainsagir51@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}
