import styled from "styled-components";
import { Heading2, Text1 } from "./styles";

const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  padding: 0 15px;
  margin: auto;
`;
const SectionHeading = styled.h2`
  ${Heading2}
  color: var(--light-gray);
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 25px 0;
  span {
    color: var(--danger);
  }
`;
const SectionPara = styled.div`
  p {
    margin: 0 0 5px 0;
    ${Text1}
    color: var(--text-color);
    text-align: center;
    font-weight: 700;
  }
`;

export { Container, SectionHeading, SectionPara };
