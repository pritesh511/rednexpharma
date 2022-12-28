import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import { Container, SectionHeading } from "../../styles/commonStyles";
import { Slide, SliderBlock, SliderSection, TitleBlock } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const PresentSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <SliderSection>
        <Container>
          <TitleBlock>
            <SectionHeading>
              <span>our</span> products
            </SectionHeading>
            <p>Quality of product is our first priority.</p>
          </TitleBlock>
          <SliderBlock>
            <Slider {...settings}>
              <Slide>
                <Link href="/">
                  <img src="/images/syrup.jpg" />
                  <span>syrup</span>
                </Link>
              </Slide>
              <Slide>
                <Link href="/">
                  <img src="/images/suspension.jpg" />
                  <span>suspension</span>
                </Link>
              </Slide>
              <Slide>
                <Link href="/">
                  <img src="/images/drops.jpg" />
                  <span>drops</span>
                </Link>
              </Slide>
              <Slide>
                <Link href="/">
                  <img src="/images/gel.jpg" />
                  <span>gel</span>
                </Link>
              </Slide>
              <Slide>
                <Link href="/">
                  <img src="/images/cream.jpg" />
                  <span>cream</span>
                </Link>
              </Slide>
              <Slide>
                <Link href="/">
                  <img src="/images/ointment.jpg" />
                  <span>ointment</span>
                </Link>
              </Slide>
              <Slide>
                <Link href="/">
                  <img src="/images/lotion.jpg" />
                  <span>lotion</span>
                </Link>
              </Slide>
            </Slider>
          </SliderBlock>
        </Container>
      </SliderSection>
    </>
  );
};

export default PresentSlider;
