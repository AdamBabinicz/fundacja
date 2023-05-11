import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from "../../styles/Global.styled";
import {
  ProjectImageContainer,
  TechStackCard,
  ProjectImage,
} from "../../styles/MyProject.styled";
import { FaSun } from "react-icons/fa";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants";

const Project = ({ data }) => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <FlexContainer direction={data.reverse ? "row-reverse" : ""} fullWidthChild>
      {/* left section */}
      <motion.div
        variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <FlexContainer align="center" gap="1rem">
          <Heading as="h3" size="h3" bottom="1rem">
            {data.project_name}
          </Heading>
          <IconContainer color="blue" size="2rem">
            <FaSun />
          </IconContainer>
        </FlexContainer>
        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            {data.tech_stack.map((stack, id) => (
              <TechStackCard key={id}>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>
        <ParaText top="1.5rem" bottom="2rem">
          {data.project_desc}
        </ParaText>
        <Button
          className="demo-btn"
          onClick={() => toggleTab(data.project_url)}
        >
          Zobacz
        </Button>
      </motion.div>
      <div
        className={
          toggleState === 1 ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times services__modal-close"
          ></i>
          <h3 className="services__modal-title">Plastykoterapia</h3>
          <p className="services__modal-description">
            Plastykoterapia to najogólniej biorąc terapia za pomocą sztuki –
            wykorzystująca techniki plastyczne: malarstwo, rzeźbę, rysunek,
            collage, grafikę oraz terapia kolorami. Podczas zajęć dzieci poprzez
            sztukę odzwierciedlają swoje lęki, obawy, emocje. Takie zajęcia
            pomagają zmniejszyć napięcie i niepokój.
          </p>
          <div className="services__modal-services">
            <img src={data.img} alt="..." />
          </div>
        </div>
      </div>

      <div
        className={
          toggleState === 2 ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times services__modal-close"
          ></i>
          <h3 className="services__modal-title">Grupowe zajęcia sportowe</h3>
          <p className="services__modal-description">
            Celem zajęć sportowych jest rozwój równowagi i koordynacji ruchowej.
            Dzięki zajęciom sportowym dzieci wzmacniają siłę mięśniową i
            poprawiają wydolności organizmu, wdrażają się do aktywnych form
            spędzania czasu wolnego, wyrabiają nawyk systematycznych ćwiczeń
            fizycznych, odreagowują napięcia psychiczne, normalizują masę ciała.
            W trakcie zajęć wdrażane są elementy gier sportowych, takich jak:
            koszykówka, siatkówka, piłka nożna, badminton, tenis stołowy, dzięki
            czemu podopieczni uczą się zasad współpracy i rywalizacji.
          </p>
          <p className="services__modal-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            atque? Fuga quae eveniet possimus tempora molestias? Modi,
            recusandae. Unde ea architecto rem quis, voluptates aliquam
            expedita, qui minus totam necessitatibus vero veritatis deserunt
            quidem tempora pariatur ipsam accusamus odio. Pariatur cumque nam
            eveniet. Vitae illum dolor sapiente libero, beatae dolorum?
          </p>
          <div className="services__modal-services">
            <img src={data.img} alt="..." />
          </div>
        </div>
      </div>
      {/* right-section-project-image */}
      <ProjectImageContainer
        as={motion.div}
        variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
        justify={data.reverse ? "flex-start" : "flex-end"}
      >
        <ProjectImage src={data.project_img} alt="..." />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default Project;
