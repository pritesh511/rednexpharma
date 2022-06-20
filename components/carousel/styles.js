import styled from "styled-components";

const CarouselWrap = styled.div`
  .control-dots {
    margin: 24px 0;
  }
  .dot {
    width: 10px !important;
    height: 10px !important;
    border: 1px solid var(--white) !important;
    border-radius: 10px !important;
    background-color: transparent !important;
    box-shadow: none !important;
    opacity: 1 !important;
  }
  .dot.selected {
    background-color: var(--white) !important;
  }
  @media only screen and (max-width: 768px) {
    .slider {
      height: 320px;
    }
    .control-dots {
      margin: 12px 0;
    }
  }
  @media only screen and (max-width: 479px) {
    .slider {
      height: 270px;
    }
  }
`;
const Slide = styled.div`
  height: 100%;
  img {
    height: 100%;
    object-fit: cover;
  }
`;
const LeftArrowBlock = styled.div`
  width: 15%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  opacity: 0.5;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5) 0,
    rgba(0, 0, 0, 0.0001) 100%
  );
  transition: all 300ms;
  svg {
    width: 40px;
    height: 40px;
  }
  :hover {
    opacity: 0.9;
  }
  @media only screen and (max-width: 768px) {
    svg {
      width: 30px;
      height: 30px;
    }
    :hover {
      opacity: 0.5;
    }
  }
`;
const RightArrowBlock = styled.div`
  width: 15%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  opacity: 0.5;
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.5) 0,
    rgba(0, 0, 0, 0.0001) 100%
  );
  transition: all 300ms;
  svg {
    width: 40px;
    height: 40px;
  }
  :hover {
    opacity: 0.9;
  }
  @media only screen and (max-width: 768px) {
    svg {
      width: 30px;
      height: 30px;
    }
    :hover {
      opacity: 0.5;
    }
  }
`;

export { CarouselWrap, Slide, LeftArrowBlock, RightArrowBlock };
