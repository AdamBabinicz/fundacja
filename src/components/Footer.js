import React from "react";
import { motion } from "framer-motion";
import {
  PaddingContainer,
  Heading,
  BlueText,
  FlexContainer,
  Button,
} from "../styles/Global.styled";
import {
  ContactForm,
  FormLabel,
  FormInput,
  RightsReserved,
} from "../styles/Footer.styled";
import { fadeInBottomVariant } from "../utils/Variants";

const Footer = () => {
  return (
    <PaddingContainer id="kontakt" top="5%" bottom="10%">
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        Kontakt
      </Heading>
      <Heading
        as={motion.h2}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
        top="0.5rem"
      >
        Kontakt <BlueText>z nami</BlueText>
      </Heading>
      <PaddingContainer top="3rem">
        <FlexContainer justify="center">
          <ContactForm
            as={motion.form}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
          >
            <PaddingContainer bottom="2rem">
              <FormLabel>Imię i nazwisko:</FormLabel>
              <FormInput
                type="text"
                placeholder="Wpisz swoje imię i nazwisko"
              />
            </PaddingContainer>
            <PaddingContainer bottom="2rem">
              <FormLabel>Email:</FormLabel>
              <FormInput type="email" placeholder="Podaj swój email" />
            </PaddingContainer>
            <PaddingContainer bottom="2rem">
              <FormLabel>Wiadomość:</FormLabel>
              <FormInput as="textarea" placeholder="Napisz wiadomość" />
            </PaddingContainer>
            <FlexContainer justify="center" responsiveFlex>
              <Button>Wyślij wiadomość</Button>
            </FlexContainer>
          </ContactForm>
        </FlexContainer>
      </PaddingContainer>
      <RightsReserved>Radom 2023 - {new Date().getFullYear()}.</RightsReserved>
    </PaddingContainer>
  );
};

export default Footer;
