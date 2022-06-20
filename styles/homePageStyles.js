import styled from "styled-components";
import { Text3 } from "./styles";

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

export { WelcomeSection, ReadMoreButton };
