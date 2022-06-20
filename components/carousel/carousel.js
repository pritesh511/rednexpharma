import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { LeftArrowBlock, CarouselWrap, Slide, RightArrowBlock } from "./styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HeroCarousel = () => {
  return (
    <>
      <CarouselWrap>
        <Carousel
          transitionTime={600}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          renderArrowPrev={(clickHandler, hasPrev, label) => (
            <LeftArrowBlock onClick={clickHandler}>
              <ArrowBackIosNewIcon style={{ color: "white" }} />
            </LeftArrowBlock>
          )}
          renderArrowNext={(clickHandler, hasPrev, label) => (
            <RightArrowBlock onClick={clickHandler}>
              <ArrowForwardIosIcon style={{ color: "white" }} />
            </RightArrowBlock>
          )}
        >
          <Slide>
            <img src="/images/slide_1.jpg" />
          </Slide>
          <Slide>
            <img src="/images/slide_2.jpg" />
          </Slide>
          <Slide>
            <img src="/images/slide_3.jpg" />
          </Slide>
          <Slide>
            <img src="/images/slide_4.jpg" />
          </Slide>
        </Carousel>
      </CarouselWrap>
    </>
  );
};
export default HeroCarousel;
