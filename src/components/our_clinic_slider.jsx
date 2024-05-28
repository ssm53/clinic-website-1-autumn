import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styled from "styled-components";

function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 2000,
    pauseOnHover: true,
    centerMode: true,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledWrapper className="slider-container py-2">
      <StyledSlider {...settings}>
        <StyledImageContainer>
          <StyledImage
            src="/svgs/doctors.jpg"
            alt="doctor"
            width={350}
            height={350}
          />
        </StyledImageContainer>
        <StyledImageContainer>
          <StyledImage
            src="/svgs/operation.jpg"
            alt="doctor"
            width={350}
            height={350}
          />
        </StyledImageContainer>
        <StyledImageContainer>
          <StyledImage
            src="/svgs/baby.jpg"
            alt="doctor"
            width={350}
            height={350}
          />
        </StyledImageContainer>
        <StyledImageContainer>
          <StyledImage
            src="/svgs/baby.jpg"
            alt="doctor"
            width={350}
            height={350}
          />
        </StyledImageContainer>
      </StyledSlider>
    </StyledWrapper>
  );
}

export default MultipleItems;

const StyledWrapper = styled.div`
  background-color: rgba(253, 235, 208, 1);
  width: 100%;
`;
const StyledSlider = styled(Slider)`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const StyledImageContainer = styled.div`
  display: flex;
  padding: 2px;
`;

const StyledImage = styled(Image)``;
