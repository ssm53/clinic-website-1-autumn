import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Headings = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div ref={ref} className="flex flex-col items-center py-16">
      <StyledHeading
        className="text-3xl md:text-4xl lg:text-[48px] font-semibold text-center"
        i
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        {props.title}
        <motion.img
          src="./svgs/verctor.png"
          alt="vector"
          className="py-2"
          style={{ width: "100%" }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{
            duration: 1,
          }}
        />
      </StyledHeading>
      <motion.p
        className="text-center pt-10 "
        style={{ width: "70%" }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        {props.description}
      </motion.p>
    </div>
  );
};

export default Headings;

const StyledHeading = styled(motion.h2)`
  /* padding-top: 2rem; */
`;
