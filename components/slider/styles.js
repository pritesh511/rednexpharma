import styled from "styled-components";

const SliderSection = styled.section`
  padding: 45px 0;
`;

const TitleBlock = styled.div`
  p {
    margin: 0;
    text-align: center;
    font-size: 18px;
    line-height: 19px;
    font-weight: 500;
    color: var(--para-gray);
  }
`;

const SliderBlock = styled.div`
  width: 100%;
  margin: 80px 0 0 0;
  .slick-arrow.slick-prev {
    border: 1px solid var(--danger);
    border-right: none;
    right: 44px;
    left: auto;
    top: -50px;
    transform: none;
    height: 34px;
    width: 34px;
    z-index: 1;
    ::before {
      color: var(--danger);
      opacity: 1;
    }
  }
  .slick-arrow.slick-next {
    border: 1px solid var(--danger);
    right: 10px;
    top: -50px;
    left: auto;
    transform: none;
    height: 34px;
    width: 34px;
    z-index: 1;
    ::before {
      color: var(--danger);
      opacity: 1;
    }
  }
`;

const Slide = styled.div`
  padding: 0 10px;
  a {
    width: 100%;
    display: inline-block;
    border: 1px solid var(--chinese-silver);
    transition: all 300ms;
    :hover {
      border: 1px solid var(--danger);
    }
    img {
      width: 100%;
    }
  }
  span {
    display: block;
    text-align: center;
    padding: 12px 0;
    color: #333;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 16px;
  }
  @media only screen and (max-width: 480px) {
    padding: 0;
  }
`;

export { SliderSection, TitleBlock, SliderBlock, Slide };
