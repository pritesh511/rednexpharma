import styled from "styled-components";

const AnnounceSection = styled.div`
  width: 100%;
  background-color: var(--light-gray);
`;
const AnnounceRow = styled.div`
  display: flex;
  align-items: center;
`;
const AnnounceLeft = styled.div``;
const AnnounceRight = styled.div``;
const DownloadButton = styled.div`
  a {
    padding: 12px;
    background-color: rgba(237, 28, 36, 1);
    color: var(--white);
    display: inline-block;
    font-size: 13px;
    line-height: 18px;
    font-weight: 700;
    :hover {
      background-color: rgba(237, 28, 36, 0.95);
    }
  }
`;

export {
  AnnounceSection,
  AnnounceRow,
  AnnounceLeft,
  AnnounceRight,
  DownloadButton,
};
