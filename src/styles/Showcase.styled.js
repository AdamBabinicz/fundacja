import styled from "styled-components";

export const ShowcaseParticleContainer = styled.div`
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    /* display: none; */
    display: flex;
    justify-content: center;
  }
`;

export const ShowcaseImageCard = styled.div`
  /* border: 1px solid #fff; */
  width: max-content;
  padding-top: 2rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  z-index: 1;

  & img {
    width: 100%;
    height: 400px;
    object-fit: cover;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      height: 300px;
    }
  }
`;

export const Particle = styled.img`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  transform: rotate(${({ rotate }) => rotate});
`;
