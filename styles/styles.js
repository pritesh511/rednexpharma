import { css } from "styled-components";

const Heading2 = css`
  font-size: 30px;
  line-height: 42px;
  font-weight: 900;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const Heading3 = css`
  font-size: 28px;
  line-height: 40px;
  font-weight: 700;
  @media only screen and (max-width: 768px) {
    font-size: 22px;
    line-height: 38px;
  }
`;

const Heading4 = css`
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
`;

const Text1 = css`
  font-size: 16px;
  line-height: 26px;
`;

const Text2 = css`
  font-size: 15px;
  line-height: 21px;
  font-weight: 700;
`;

const Text3 = css`
  font-size: 13px;
  line-height: 18px;
  font-weight: 700;
`;

export { Text1, Text2, Text3, Heading2, Heading3, Heading4 };
