import styled from "styled-components";
import { Text1, Text2 } from "./styles";

const AboutBlock = styled.div`
  display: flex;
  margin: 0 -15px;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin: 0;
  }
`;
const AboutRight = styled.div`
  max-width: 41.66%;
  width: 100%;
  padding: 0 15px;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0;
  }
`;
const AboutLeft = styled.div`
  max-width: 58.33%;
  width: 100%;
  padding: 0 15px;
  p {
    ${Text1}
    color: var(--text-color);
    margin: 0 0 16px 0;
    &.mb0 {
      margin: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0;
  }
`;

const VisionSection = styled.section`
  padding: 45px 0;
  background-image: url("/images/vision-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const VisionBlock = styled.div`
  display: flex;
  margin: 0 -15px;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin: 0;
  }
`;
const VisonDataBlock = styled.div`
  max-width: 50%;
  width: 100%;
  padding: 0 15px;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0;
    margin-bottom: 16px;
    :last-child {
      margin-bottom: 0;
    }
  }
`;
const VisionInnerBlock = styled.div`
  width: 100%;
  background-color: var(--white);
  padding: 20px;
`;
const VisionHeading = styled.h3`
  font-size: 18px;
  line-height: 24px;
  font-weight: 900;
  color: var(--light-gray);
  margin: 0 0 25px 0;
  span {
    color: var(--danger);
  }
`;
const VisionList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
const VisonListItem = styled.li`
  ${Text2}
  margin: 0 0 10px 0;
  padding: 0 0 0 28px;
  color: var(--text-color);
  :last-child {
    margin: 0;
  }
`;

export {
  AboutBlock,
  AboutRight,
  AboutLeft,
  VisionSection,
  VisionBlock,
  VisonDataBlock,
  VisionHeading,
  VisionInnerBlock,
  VisionList,
  VisonListItem,
};
