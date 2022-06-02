import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  background-color: #b0e0e6;
  color: #fff;
  text-align: center;
  padding: 5px 0;
`;

const SLink = styled(Link)`
  margin: 0 4px;
`;

export const Header = () => {
  return (
    <SHeader>
      <nav>
        <SLink to="/">to top</SLink> | <SLink to="/company">to company</SLink> |{" "}
        <SLink to="/contact">to contact</SLink>
      </nav>
    </SHeader>
  );
};
