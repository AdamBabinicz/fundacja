import React from "react";
import { motion } from "framer-motion";
import {
  FlexContainer,
  PaddingContainer,
  Heading,
  IconContainer,
  ParaText,
  BlueText,
} from "../styles/Global.styled";
import { SkillsCardContainer, SkillsCard } from "../styles/MySkills.styled";
import { Skills } from "../utils/Data";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const MySkills = () => {
  return (
    <PaddingContainer
      id="informacje"
      top="10"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FlexContainer
        responsiveFlex
        responsiveDirection="column-reverse"
        fullWidthChild
      >
        {/* left section */}
        <SkillsCardContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          {Skills.map((skill) => (
            <SkillsCard key={skill.id}>
              <IconContainer size="2rem" color="blue">
                {skill.icon}
              </IconContainer>
              <Heading as="h4" size="h4">
                {skill.tech}
              </Heading>
              <Heading as="h5" size="h5">
                {skill.tech1}
              </Heading>
            </SkillsCard>
          ))}
        </SkillsCardContainer>
        {/* right section */}
        <motion.div
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h4" size="h4">
            Informacje
          </Heading>
          <Heading as="h2" size="h2" top="0.5rem">
            Jak <BlueText>realizujemy nasze cele?</BlueText>
          </Heading>
          <ParaText top="2rem" bottom="1.5rem">
            Fundacja realizuje swoje cele statutowe poprzez prowadzenie
            działalności nieodpłatnej i&nbsp;odpłatnej pożytku publicznego
            w&nbsp;zakresie:
          </ParaText>
          <ParaText>
            Prowadzenie działalności na rzecz upowszechniania kultury, sztuki
            i&nbsp;sportu wśród dzieci i&nbsp;młodzieży.
          </ParaText>
          <ParaText>
            Tworzenie i&nbsp;prowadzenie galerii i&nbsp;pracowni plastycznych.
          </ParaText>
          <ParaText>
            Organizowanie zajęć dydaktycznych z&nbsp;zakresu sztuk plastycznych,
            kultury i&nbsp;sztuki.
          </ParaText>
          <ParaText>
            Wspieranie, finansowanie i&nbsp;dofinansowywanie edukacji
            artystycznej dzieci i&nbsp;młodzieży.
          </ParaText>
          <ParaText>
            Upowszechnianie i&nbsp;promowanie w&nbsp;przedszkolach, szkołach
            i&nbsp;innych placówkach oświatowych znaczenia nauki, kultury,
            sztuki i&nbsp;sportu.
          </ParaText>
          <ParaText>
            Organizowanie i&nbsp;prowadzenie terapii zajęciowej dla dzieci
            i&nbsp;młodzieży zagrożonej wykluczeniem, osób wykluczonych,
            potrzebujących wsparcia.
          </ParaText>
          <ParaText>
            Prowadzenie działań artystycznych w&nbsp;formie performensu, działań
            plastycznych, filmu, fotografii, nagrań, wydawnictw.
          </ParaText>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default MySkills;
