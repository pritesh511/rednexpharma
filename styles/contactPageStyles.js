import styled from "styled-components";
import { Heading2 } from "./styles";

const MapSection = styled.section`
  position: relative;
`;

const ContactBlock = styled.div`
  position: absolute;
  top: 40px;
  right: 5%;
  background-color: rgba(237, 28, 36, 0.9);
  padding: 20px;
  border-radius: 5px;
  @media only screen and (max-width: 560px) {
    position: static;
    border-radius: 0;
  }
`;

const ContactHeading = styled.h2`
  font-size: 26px;
  line-height: 28px;
  font-weight: 500;
  padding: 0 0 10px 0;
  margin: 0 0 15px 0;
  color: var(--white);
  border-bottom: 1px solid var(--danger-border);
  text-transform: uppercase;
`;

const ContactRow = styled.div`
  display: flex;
  @media only screen and (max-width: 479px) {
    margin: 0;
    flex-wrap: wrap;
  }
`;
const ColLeft = styled.div`
  width: 60%;
  @media only screen and (max-width: 479px) {
    width: 100%;
  }
`;
const ColRight = styled.div`
  width: 40%;
  @media only screen and (max-width: 479px) {
    width: 100%;
    padding: 26px 0 0 0;
  }
`;

const TopFlex = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin: 0 0 0 10px;
    font-size: 18px;
    line-height: 19px;
    font-weight: 500;
    color: var(--white);
  }
`;
const Icon = styled.div``;

const BottoContent = styled.div`
  padding: 20px 0 0 34px;
  p {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: var(--white);
    margin: 0 0 4px 0;
    :last-child {
      margin: 0;
    }
  }
`;

export {
  MapSection,
  ContactBlock,
  ContactHeading,
  ContactRow,
  ColLeft,
  ColRight,
  TopFlex,
  Icon,
  BottoContent,
};
