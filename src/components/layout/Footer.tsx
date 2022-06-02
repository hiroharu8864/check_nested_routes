import styled from "styled-components";

const SFooter = styled.footer`
  background-color: #b0e0e6;
  color: #000;
  text-align: center;
  padding: 5px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const Footer = () => {
  return <SFooter>Hiroharu Tanaka's company</SFooter>;
};
