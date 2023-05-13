import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme";
import { Container, MainBody, FadeImage } from "./styles/Global.styled";
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopFadeImage from "./assets/top.png";
import LeftFadeImage from "./assets/left.png";
import RightFadeImage from "./assets/right.png";
import BottomFadeImage from "./assets/bottom.png";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Navbar />
        <Container>
          <Showcase />
          <MySkills />
          <MyProjects />
          <Footer />
        </Container>
        <FadeImage src={TopFadeImage} top="0" />
        <FadeImage src={LeftFadeImage} top="30vh" />
      </MainBody>
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </ThemeProvider>
  );
}

export default App;
