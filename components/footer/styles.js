import styled from "styled-components";
import { Heading4, Text3 } from "../../styles/styles";

const FooterSection = styled.section`
  padding: 15px 0;
  background: url("/images/footer_bg.png");
  background-size: cover;
  background-position: left;
`;
const FooterRow = styled.div`
  margin: 0 -15px;
  display: flex;
  flex-wrap: wrap;
`;
const FooterColumn = styled.div`
  width: 25%;
  margin: 25px 0;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (max-width: 991px) {
    width: 33.33%;
  }
  @media only screen and (max-width: 768px) {
    width: 50%;
  }
  @media only screen and (max-width: 479px) {
    width: 100%;
    margin: 16px 0;
  }
`;
const FooterLogo = styled.div`
  margin: 0 0 15px 0;
  a {
    display: flex;
  }
`;
const FooterPara = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 22px;
  color: var(--dark-gray);
`;
const FooterHeading = styled.h2`
  margin: 0 0 25px 0;
  font-size: 19px;
  line-height: 28px;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: var(--light-danger);
  @media only screen and (max-width: 479px) {
    margin: 0 0 16px 0;
  }
`;
const FooterList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
const FooterItem = styled.li`
  margin: 0 0 10px 0;
  :last-child {
    margin: 0;
  }
  a {
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    line-height: 22px;
    color: var(--dark-gray);
    transition: all 300ms;
    :hover {
      color: var(--white);
    }
  }
`;
const FooterPageList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const FooterPageItem = styled.li`
  width: 50%;
  a {
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    line-height: 22px;
    color: var(--dark-gray);
    transition: all 300ms;
    :hover {
      color: var(--white);
    }
  }
`;
const FooteBottomBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 479px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const CopyRightText = styled.p`
  ${Text3}
  color: var(--dark-gray);
`;
const SocialBlock = styled.div`
  display: flex;
  align-items: center;
  span {
    ${Text3}
    margin: 0 10px 0 0;
    color: var(--dark-gray);
  }
  a {
    > span {
      transform: scale(1);
      transition: all 300ms;
    }
    :hover {
      > span {
        transform: scale(1.1);
        @media only screen and (max-width: 479px) {
          transform: scale(1);
        }
      }
    }
  }
`;

export {
  FooterSection,
  FooterRow,
  FooterColumn,
  FooterLogo,
  FooterPara,
  FooterHeading,
  FooterList,
  FooterItem,
  FooterPageList,
  FooterPageItem,
  FooteBottomBlock,
  CopyRightText,
  SocialBlock,
};
