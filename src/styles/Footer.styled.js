import styled from "styled-components";

export const ContactForm = styled.form`
  width: 40%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
    margin: auto;
  }
`;
export const FormLabel = styled.p`
  color: ${({ theme }) => theme.colors.para_text_color};
  padding-bottom: 10px;
`;
export const FormInput = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary_light};
  border: 1px solid ${({ theme }) => theme.colors.para_text_color};
  color: ${({ theme }) => theme.colors.para_text_color};
  border-radius: 5px;
  padding: 15px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.para_text_color};
  }
`;
export const MenuIcon = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.6rem;
`;
export const RightsReserved = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    bottom: 0rem;
  }
`;
