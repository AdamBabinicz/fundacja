import styled from "styled-components";

export const MainBody = styled.div`
  background: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 90%;
  margin: auto;
`;

// export const FlexContainer = styled.div`
//   display: flex;
//   justify-content: ${(props) => props.justify};
//   align-items: ${(props) => props.align || ""};
//   gap: ${({ gap }) => gap};
//   flex-direction: ${({ rowReverse }) => (rowReverse ? "row-reverse" : "row")};

//   & > div {
//     flex: ${({ fullWidthChild }) => fullWidthChild && 1};
//   }

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     display: ${({ responsiveFlex }) => (responsiveFlex ? "flex" : "block")};
//     flex-direction: ${({ responsiveDirection }) => responsiveDirection};
//   }
// `;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align || ""};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ rowReverse }) => (rowReverse ? "row-reverse" : "row")};

  & > div {
    flex: ${({ fullWidthChild }) => fullWidthChild && 1};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: ${({ responsiveFlex }) => (responsiveFlex ? "flex" : "block")};
    flex-direction: ${({ responsiveDirection }) => responsiveDirection};
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

export const PaddingContainer = styled.div`
  padding-top: ${({ top }) => top};
  padding-bottom: ${({ bottom }) => bottom};
  padding-left: ${({ left }) => left};
  padding-right: ${({ right }) => right};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: ${({ responsiveTop }) => responsiveTop};
    padding-bottom: ${({ responsiveBottom }) => responsiveBottom};
    padding-left: ${({ responsiveLeft }) => responsiveLeft};
    padding-right: ${({ responsiveRight }) => responsiveRight};
  }
`;

export const Heading = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.white};
  text-align: ${({ align }) => align};
  font-size: ${({ size }) => {
    switch (size) {
      case "h1":
        return "4.5rem";

      case "h2":
        return "3rem";

      case "h3":
        return "2rem";

      case "h4":
        return "1.2rem";

      default:
        return;
    }
  }};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ size }) => {
      switch (size) {
        case "h1":
          return "2.5rem";

        case "h2":
          return "2rem";

        case "h3":
          return "1.5rem";

        case "h4":
          return "1rem";

        default:
          return;
      }
    }};
    /* display: flex; */
  }
`;

export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ParaText = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.para_text_color};
  line-height: 2rem;
`;

export const Particle = styled.img`
  position: absolute;
  top: ${({ initialTop }) => initialTop};
  left: ${({ initialLeft }) => initialLeft};
  right: ${({ initialRight }) => initialRight};
  bottom: ${({ initialBottom }) => initialBottom};
  transform: rotate(${({ rotate }) => rotate});
`;

export const IconContainer = styled.div`
  color: ${({ color, theme }) => {
    switch (color) {
      case "white":
        return theme.colors.white;

      case "blue":
        return theme.colors.secondary;

      default:
        return;
    }
  }};
  font-size: ${({ size }) => size};
  margin-left: 1rem;
`;

export const IconContainers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: -0.5rem;
  margin-left: 4rem;

  .orange {
    color: orange;
    font-size: 3rem;
    margin-top: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 1rem;
  }
`;

export const Button = styled.a`
  display: inline-block;
  width: max-content;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary_light};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary_light};
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const FadeImage = styled.img`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
