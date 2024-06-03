"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import CardsData from "./data";

const ServiceCard = ({ icon, header, body, id }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  React.useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className=" my-1"
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 1 }}
      style={{
        margin: "0 auto",
        width: "auto",
      }}
    >
      <StyledCard className=" p-7 my-1" fullWidth>
        <StyledCardHeader className="flex flex-col justify-center items-center">
          {icon}
          <StyledHeading className="text-center">{header}</StyledHeading>
        </StyledCardHeader>
        <CardBody className="text-center">
          <p>{body}</p>
        </CardBody>
        <CardFooter className="flex justify-center pt-8">
          <Link href={`/services/${id}`}>
            <StyledButton>Learn More</StyledButton>
          </Link>
        </CardFooter>
      </StyledCard>
    </motion.div>
  );
};

const ServicesCard = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggleCards = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };
  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
      }}
    >
      <ServicesGrid>
        {showAll
          ? CardsData.map((card, index) => (
              <ServiceCard
                key={index}
                id={card.id}
                icon={card.icon}
                header={card.header}
                body={card.body}
              />
            ))
          : CardsData.slice(0, 6).map((card, index) => (
              <ServiceCard
                key={index}
                id={card.id}
                icon={card.icon}
                header={card.header}
                body={card.body}
              />
            ))}
      </ServicesGrid>
      <div className="flex justify-center pt-8">
        <StyledLoadMoreButton className="" onClick={handleToggleCards}>
          {showAll ? "Show Less" : "More Services"}
        </StyledLoadMoreButton>
      </div>
    </div>
  );
};

export default ServicesCard;

const StyledWrapper = styled.div`
  background-color: red;
  width: calc(90%);
`;
const StyledHeading = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;
const StyledCardHeader = styled(CardHeader)`
  svg {
    color: rgba(211, 84, 0, 1);
  }
`;

const StyledCard = styled(Card)`
  background-color: rgba(253, 235, 208, 1);
`;

const StyledButton = styled(Button)`
  width: 10rem;
  height: 3rem;
  border: 2px solid rgba(211, 84, 0, 1);
  color: rgba(211, 84, 0, 1);
  background-color: transparent;
  font-weight: 600;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: rgba(243, 156, 18, 1);
    color: #ffffff;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(230px, 1fr));
  }
`;
const StyledLoadMoreButton = styled(Button)`
  width: 200px;
  height: 50px;
  background-color: rgba(243, 156, 18, 1);
  color: white;
  font-weight: 600;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #f39d12a9;
    color: #ffffff;
  }
`;
