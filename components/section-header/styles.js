import styled from "styled-components";
import { Heading2, Text3 } from "../../styles/styles";

const BannerSection = styled.section`
  background-image: url("/images/banner_bg.jpg");
  padding: 100px 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
`;

const BannerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 40px;
    line-height: 44px;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 1px 1px 1px #555555;
    text-align: center;
    margin: 0;
    color: var(--white);
  }
`;
const Line = styled.div`
  position: relative;
  background: var(--danger);
  height: 3px;
  width: 80px;
  margin: 10px auto;
`;

const BreadCrum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    ${Text3}
    color: var(--danger);
    display: inline-block;
    font-weight: 400;
    transition: all 300ms;
    :hover {
      color: var(--light-danger);
    }
  }
  span {
    ${Text3}
    color: var(--white);
    display: inline-block;
    font-weight: 400;
  }
`;

const Slash = styled.span`
  margin: 0 8px;
  color: var(--white);
`;

export { BannerSection, BannerBlock, Line, BreadCrum, Slash };
