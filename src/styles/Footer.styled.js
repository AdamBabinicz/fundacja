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
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.para_text_color};
  }
`;

export const ButtonInput = styled.input`
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
