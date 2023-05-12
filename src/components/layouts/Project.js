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
            {data.icon}
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
        <Button className="demo-btn" onClick={() => toggleTab(data.project_n)}>
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
          <div className="services__modal-services">
            <img src={data.img} alt="..." />
          </div>
        </div>
      </div>

      <div
        className={
          toggleState === 3 ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times services__modal-close"
          ></i>
          <h3 className="services__modal-title">Grupowe zajęcia rekreacyjne</h3>
          <p className="services__modal-description">
            Minimum aktywności ruchowej u dziecka badacze wytyczają na 6 godzin
            zorganizowanego ruchu w tygodniu. Aktywność ruchowa dziecka jest
            niezbędna do prawidłowego jego funkcjonowania, dlatego dziecko
            oprócz uczestnictwa w zajęciach wychowania fizycznego, odbywających
            się w szkole, powinno mieć możliwość udziału w takich czynnościach
            ze swoimi rówieśnikami poza szkołą. Największą potrzebę ruchową
            dzieci wykazują w wieku przedszkolnym i wczesnoszkolnym, jest ona
            konieczna do prawidłowego rozwoju umysłowego i fizycznego dziecka.
            Dzieci w tym wieku wykazują nadmierną pobudliwość, dlatego też
            aktywność ruchowa powinna zmierzać do kształtowania ich zdolności
            manualnych koordynacji ruchowej, reakcji na sygnały akustyczne i
            optyczne. Niespełnienie minimalnej normy aktywności ruchowej
            przyczynia się do ograniczenia wszelakich procesów zachodzących w
            okresie rozwoju dziecka oraz może stać się czynnikiem hamującym
            rozwój świadomości i aktywności ruchowej w dalszych etapach życia.
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
