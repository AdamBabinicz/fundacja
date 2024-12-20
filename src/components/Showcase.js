import React, { useState } from "react";
import { motion } from "framer-motion";
import { Links as Link } from "react-router-dom";
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
  Links,
  IconContainers,
} from "../styles/Global.styled";
import {
  ShowcaseParticleContainer,
  ShowcaseImageCard,
  Particle,
} from "../styles/Showcase.styled";
import { BsTwitter, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";
import { TfiGallery } from "react-icons/tfi";
import { ImFileText } from "react-icons/im";
import ShowcaseImg from "../assets/11.avif";
import BackgroundImg from "../assets/9.png";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";
import resume from "./wzor_statutu_fund.pdf";
import GalleryPopup from "./GalleryPopup";

const Showcase = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openGallery = () => {
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <PaddingContainer
      id="start"
      left="3%"
      right="10%"
      top="10%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <FlexContainer align="center" fullWidthChild>
        {/* left-content */}
        <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h3" size="h3">
            fundacja pożytku publicznego
          </Heading>
          <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
            w<BlueText>ART</BlueText>ości
          </Heading>
          <Heading as="h4" size="h4">
            działaność na rzecz&nbsp;
            <BlueText>
              kultury, sztuki, ochrony dóbr kultury i&nbsp;dziedzictwa
              narodowego
            </BlueText>
          </Heading>
          <ParaText as="p" top="1rem" bottom="4rem">
            "Dopóki człowiek sam z&nbsp;własnej woli nie postawi się na ostatnim
            miejscu pośród stworzeń sobie podobnych, nie ma dla niego
            zbawienia." – Ghandi
          </ParaText>
          {/* social icons */}
          <FlexContainer gap="20px" responsiveFlex>
            <IconContainer color="white" size="1.5rem">
              <a
                href="https://twitter.com"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Twitter"
              >
                <BsTwitter />
              </a>
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <a
                href="https://youtube.com"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Youtube"
              >
                <BsYoutube />
              </a>
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <a
                href="https://instagram.com"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Instagram"
              >
                <BsInstagram />
              </a>
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <a
                href="https://facebook.com"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Facebook"
              >
                <BsFacebook />
              </a>
            </IconContainer>

            <IconContainers color="white" size="1.5rem">
              status
              <BlueText>
                <a
                  download="resume"
                  href={resume}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ImFileText />
                </a>
              </BlueText>
            </IconContainers>

            <IconContainers color="white" size="1.5rem">
              galeria
              <BlueText>
                <a target="_blank" onClick={openGallery}>
                  <TfiGallery className="orange" />
                </a>
              </BlueText>
            </IconContainers>
            {/* } */}
          </FlexContainer>
        </motion.div>
        {/* right content */}
        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          justify="flex-end"
        >
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img src={ShowcaseImg} alt="..." loading="lazy" />
            </ShowcaseImageCard>
            {/* <Particle
              as={motion.img}
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.5, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              top="-80px"
              left="20px"
              rotate="60deg"
            />
            <Particle
              as={motion.img}
              animate={{
                y: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              top="50px"
              right="-70px"
              rotate="0deg"
            />
            <Particle
              as={motion.img}
              animate={{
                y: [0, -100, 0],
                rotate: 360,
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              bottom="10px"
              left="-70px"
              rotate="50deg"
            /> */}
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
      <GalleryPopup isOpen={isGalleryOpen} onClose={closeGallery} />
    </PaddingContainer>
  );
};

export default Showcase;
