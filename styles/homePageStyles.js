import styled from "styled-components";
import { Heading3, Heading4 } from "./styles";

const WelcomeSection = styled.section`
  padding: 45px 0;
  background-image: url("/images/section_bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: repeat-y;
`;

const ReadMoreButton = styled.div`
  margin-top: 30px;
  width: 100%;
  text-align: center;
  a {
    display: inline-flex;
    align-items: center;
    padding: 8px 22px;
    background-color: var(--danger);
    color: var(--white);
    border-radius: 3px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
  }
`;

const FounderList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 479px) {
    grid-template-columns: 1fr;
  }
`;
const FounderItem = styled.li`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  box-shadow: 0 0 10px #d4a8aa;
  h3 {
    ${Heading3}
    margin: 0 0 16px 0;
    text-align: center;
  }
  span {
    ${Heading4}
    color: var(--spanish-gray);
    text-align: center;
  }
  @media only screen and (max-width: 479px) {
    h3 {
      margin: 0 0 8px 0;
    }
  }
`;

export { WelcomeSection, ReadMoreButton, FounderList, FounderItem };
