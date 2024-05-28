import React from "react";
import styled from "styled-components";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TeamCardList = () => {
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
  const cardsData = [
    {
      title: "Dr John Doe",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/team1.jpg",
    },
    {
      title: "Dr John Doe",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/team2.jpg",
    },
    {
      title: "Dr John Doe",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/team3.jpg",
    },
    {
      title: "Dr John Doe",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/team4.jpg",
    },
    {
      title: "Dr John Doe",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/team5.jpg",
    },
    {
      title: "Dr John Doe",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/team6.jpg",
    },
    {
      title: "Dr John Doe",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/team7.jpg",
    },
    {
      title: "Dr John Doe",
      subtitle: "MBBS, Mangalore",
      tracks:
        "I love to save lives and that gives me passion to wake up every morning",
      imageUrl: "./svgs/team8.jpg",
    },
  ];

  return (
    <StyledCardWrapper
      className="grid grid-cols-2 md:grid-cols-4 gap-4  py-6 pb-12"
      ref={ref}
    >
      {cardsData.map((card, index) => (
        <AnimatedCard
          key={index}
          // ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <StyledCard className="py-4 pb-0 px-4 flex-col items-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={card.imageUrl}
              width={270}
            />
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold pt-2">{card.title}</p>
              <p className="text-tiny uppercase font-bold pt-2">
                {card.subtitle}
              </p>
              <small className="text-default-500 pt-2">
                {card.tracks} Tracks
              </small>
            </CardHeader>
            <CardBody className="overflow-visible py-2"></CardBody>
          </StyledCard>
        </AnimatedCard>
      ))}
    </StyledCardWrapper>
  );
};

export default TeamCardList;

const StyledCard = styled(Card)`
  background-color: rgba(253, 235, 208, 1);
`;

const StyledCardWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const AnimatedCard = styled(motion.div)`
  opacity: 0;
`;
