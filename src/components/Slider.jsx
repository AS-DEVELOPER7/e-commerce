import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../Data";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  justify-content: space-between;
`;
const Arrow = styled.div`
  width: 2em;
  height: 2em;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10000;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "2em"};
  right: ${(props) => props.direction === "right" && "2em"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 35em;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 2;
  padding: 2em;
`;
const Title = styled.h1`
  font-size: 4em;
`;
const Description = styled.p`
  padding: 2em 0;
  font-size: 1em;
  fontweight: 500;
  letter-spacing: 0.3em;
`;
const Button = styled.button`
  padding: 0.5em;
  border: 1px solid;
  font-size: 1em;
  background: transparent;
  cursor: pointer;
`;
export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((items) => (
          <Slide bg={items.bg} key={items.id}>
            <ImgContainer>
              <Image src={items.img}></Image>
            </ImgContainer>
            <InfoContainer>
              <Title>{items.title}</Title>
              <Description>{items.desc}</Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}
