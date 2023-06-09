import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all 0.3s ease-in;
  background: ${({ bgColor }) => bgColor};
`;
export const Logo = styled.p`
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: white;
`;
export const MenuIcon = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.3s ease-in;
  display: flex;
  align-items: center;
  position: absolute;
  top: 2rem;
  right: 2rem;
`;
export const NavMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary_light};
  z-index: 1;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
`;
export const MenuItem = styled.a`
  color: #fff;
  font-size: 2.5rem;
  margin-top: 3rem;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: ${({ responsiveFlex }) => (responsiveFlex ? "block" : "flex")};
    text-align: center;
    font-size: 1.9rem;
  }
`;
