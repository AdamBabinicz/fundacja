import React from "react";
import { motion } from "framer-motion";
import { PaddingContainer, Heading, BlueText } from "../styles/Global.styled";
import { projectDetails } from "../utils/Data";
import Project from "../components/layouts/Project";
import { fadeInTopVariant } from "../utils/Variants";

const MyProjects = () => {
  return (
    <PaddingContainer
      id="zajęcia"
      top="5%"
      bottom="5%"
      responsiveTop="20%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <Heading
        as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
      >
        Kultura, sztuka, sport i&nbsp;rekreacja
      </Heading>
      <Heading
        as={motion.h2}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
      >
        Wspieranie <BlueText>aktywności</BlueText>
      </Heading>
      {projectDetails.map((project) => (
        <PaddingContainer key={project.id} bottom="5rem">
          <Project data={project} />
        </PaddingContainer>
      ))}
    </PaddingContainer>
  );
};

export default MyProjects;
