import styled from "styled-components";
import { Text2 } from "../../styles/styles";

const NavbarSection = styled.section``;
const NavbarBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -15px;
`;
const NavLogo = styled.div`
  padding: 0 15px;
  a {
    display: inline-block;
  }
`;
const NavList = styled.ul`
  padding: 20px 15px;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
`;
const NavItem = styled.li`
  display: flex;
  margin: 0px 12px;
  a {
    padding: 12px 10px;
    ${Text2}
    color: var(--text-color);
    transition: all 300ms;
    :hover {
      background-color: var(--danger);
      color: var(--white);
    }
  }
`;

export { NavbarSection, NavbarBlock, NavLogo, NavList, NavItem };
