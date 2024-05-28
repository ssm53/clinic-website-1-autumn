"use client";
import React from "react";
import styled from "styled-components";
import servicesData from "../../../components/data";

const ServicesPage = ({ params }) => {
  const serviceId = params.id;
  const serviceData = servicesData.find((service) => service.id === serviceId);

  return (
    <StyledWrapper>
      <div
        className="container mx-auto"
        style={{ width: "90%", margin: "0 auto" }}
      >
        <div
          className="flex flex-wrap justify-center"
          style={{ width: "100%" }}
        >
          <div className="text-sec md:w-1/2">
            <div>
              <StyledH1 className="text-3xl font-semibold py-4">
                Chronic Disease Management
                <img
                  src="/svgs/verctor.png"
                  alt="vector"
                  style={{ width: "72%" }}
                />
              </StyledH1>
              <StyledUl>
                <StyledListWrapper className="mb-2 py-3">
                  <li className="py-3 ">
                    <StyledSpan>Item ID</StyledSpan> : {serviceData.id} sit amet
                    consectetur adipisicing elit. Ut velit dolorem
                  </li>
                  <li className="py-3 ">
                    <StyledSpan>Title</StyledSpan> : {serviceData.header}
                  </li>
                  <li className="py-3 ">
                    <StyledSpan>Body</StyledSpan> : {serviceData.body}
                  </li>
                  <li className="py-3 ">
                    <StyledSpan>Job</StyledSpan> : {serviceData.jobs}
                  </li>
                </StyledListWrapper>
              </StyledUl>
            </div>
          </div>
          <div className="image-sec md:w-1/2 flex justify-end">
            <img src="/svgs/doctors.jpg" alt="Service Image" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ServicesPage;

const StyledWrapper = styled.div`
  padding: 7rem 0;
  padding-top: 10rem;
  @media (max-width: 768px) {
    .flex-wrap {
      flex-direction: column;
    }
    .text-sec {
      width: 100%;
      text-align: center;
    }
    .image-sec {
      order: -1;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

const StyledListWrapper = styled.div`
  font-size: 20px;
  font-weight: 400;
  list-style-type: disc;
`;

const StyledSpan = styled.span`
  color: #003466;
  font-size: 22px;
`;

const StyledH1 = styled.h1`
  color: #003466;
  @media (max-width: 768px) {
    img {
      width: 100%;
      margin: 0 auto;
    }
  }
`;

const StyledUl = styled.ul`
  padding-left: 20px;
`;
