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
`;
const Slide = styled.div``;
const ArrowBlock = styled.div`
  position: absolute;
  top: 0;
`;

export { CarouselWrap, Slide, ArrowBlock };
