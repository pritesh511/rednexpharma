import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowBlock, CarouselWrap, Slide } from "./styles";
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
            <ArrowBlock>
              <ArrowBackIosNewIcon onClick={clickHandler} />
            </ArrowBlock>
          )}
          renderArrowNext={(clickHandler, hasPrev, label) => (
            <ArrowBlock>
              <ArrowForwardIosIcon onClick={clickHandler} />
            </ArrowBlock>
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
