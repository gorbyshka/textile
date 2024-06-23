import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  height: 50px;
  width: auto;
  border-radius: 25px;
  background-color: black;
  white-space: nowrap;
`;

export const MenuItem = styled.li`
  position: relative;
  font-size: 20px;
  margin-right: 50px;
  color: white;
  cursor: pointer;

  &:hover > ul {
    display: block;
    z-index: 20;
  }

  &:hover {
    color: gray; 
  }
`;

export const SubMenu = styled.ul`
  display: none;
  position: absolute;
  list-style: none;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 25px;
  border: 1px solid #ccc;
  text-align: center;
  top: 30px;
  left: 50%;
  white-space: nowrap;
  transform: translateX(-50%);
`;

export const ColumnList = styled.ul`
  display: grid;
  grid-gap: 10px;
  list-style: none;
`;

export const ColumnListItem = styled.li`
  margin-right: 50px;
  border-right: 2px solid gray;
  border-left: 2px solid gray;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px; 
`;

export const ContactPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

export const ContactPopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
  }

`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 2px;
    background-color: #000;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover {
    background-color: #e0e0e0;
  }

`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 90;
`;

 export const SocialNetworks = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-right: 10px;

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: none;
      }

    }

  }
  
`;

export const HeadLink = styled(NavLink)`
  color: #000;
  text-decoration: none;

  &:hover {
    color: gray; 
  }

`;

export const ContactName = styled.h2``;

export const ContactUl = styled.ul``;

export const ContactLi = styled.li``;

export const PhotoPopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export const PhotoImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Svg = styled.svg``;

export const Path = styled.path``;
