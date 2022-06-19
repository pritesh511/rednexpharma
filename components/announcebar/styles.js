import styled from "styled-components";
import { Text3 } from "../../styles/styles";

const AnnounceSection = styled.div`
  width: 100%;
  background-color: var(--light-gray);
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const AnnounceRow = styled.div`
  margin: 0 -15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AnnounceLeft = styled.div`
  padding: 0 15px;
`;
const AnnounceRight = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: center;
`;
const DownloadButton = styled.div`
  a {
    padding: 12px;
    background-color: rgba(237, 28, 36, 1);
    color: var(--white);
    display: inline-flex;
    align-items: center;
    font-size: 13px;
    line-height: 18px;
    font-weight: 700;
    span {
      margin-left: 6px;
      white-space: nowrap;
    }
    :hover {
      background-color: rgba(237, 28, 36, 0.95);
    }
  }
`;
const ContactSpan = styled.span`
  ${Text3}
  color: var(--warning);
  white-space: nowrap;
`;
const ContactList = styled.ul`
  margin: 0 0 0 10px;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const ContactItem = styled.li`
  margin: 0 5px;
  display: flex;
  a {
    ${Text3}
    color: var(--white);
    display: inline-flex;
    align-items: center;
    transition: all 300ms;
    span {
      margin-left: 6px;
      white-space: nowrap;
    }
    :hover {
      color: var(--danger);
    }
  }
`;

export {
  AnnounceSection,
  AnnounceRow,
  AnnounceLeft,
  AnnounceRight,
  DownloadButton,
  ContactSpan,
  ContactList,
  ContactItem,
};
