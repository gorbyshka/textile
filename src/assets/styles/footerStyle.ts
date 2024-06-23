import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
   display: flex;
   align-items: center;
   justify-content: center; 
   padding: 20px;
   margin-top: 50px;
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
`;

export const FootLink = styled(NavLink)`
  color: #000;
  text-decoration: none;

  &:hover {
  color: gray;
}

`;
