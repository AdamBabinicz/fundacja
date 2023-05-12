import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
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
  ButtonInput,
} from "../styles/Footer.styled";
import { fadeInBottomVariant } from "../utils/Variants";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q23zirm",
        "template_pmigalq",
        form.current,
        "_-HS8q-cdIcUEmpR1"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        Kontakt <BlueText>z&nbsp;nami</BlueText>
        <p>fundacjawartosc@gmail.com</p>
      </Heading>
      <PaddingContainer top="3rem">
        <FlexContainer justify="center">
          <ContactForm
            ref={form}
            onSubmit={sendEmail}
            as={motion.form}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
          >
            <PaddingContainer bottom="2rem">
              <FormLabel>Imię i&nbsp;nazwisko:</FormLabel>
              <FormInput
                type="text"
                name="user_name"
                placeholder="Wpisz swoje imię i nazwisko"
                required
              />
            </PaddingContainer>
            <PaddingContainer bottom="2rem">
              <FormLabel>Email:</FormLabel>
              <FormInput
                type="email"
                name="user_email"
                placeholder="Podaj swój email"
                required
              />
            </PaddingContainer>
            <PaddingContainer bottom="2rem">
              <FormLabel>Wiadomość:</FormLabel>
              <FormInput
                name="message"
                as="textarea"
                placeholder="Napisz wiadomość"
                required
              />
            </PaddingContainer>
            <FlexContainer justify="center" responsiveFlex>
              <ButtonInput type="submit" value="Wyślij wiadomość" />
            </FlexContainer>
          </ContactForm>
        </FlexContainer>
      </PaddingContainer>
      <RightsReserved>Radom 2023 - {new Date().getFullYear()}.</RightsReserved>
    </PaddingContainer>
  );
};

export default Footer;
