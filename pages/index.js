import Link from "next/link";
import { NextSeo } from "next-seo";
import Carousel from "../components/carousel/carousel";
import Layout from "../components/layout";
import { Container, SectionHeading, SectionPara } from "../styles/commonStyles";
import { ReadMoreButton, WelcomeSection } from "../styles/homePageStyles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Home = () => {
  return (
    <>
      <NextSeo
        title="Home | Rednex Pharmaceuticals"
        description="Rednex Pharmaceuticals"
      />
      <Layout>
        <Carousel />
        <WelcomeSection>
          <Container>
            <SectionHeading>
              <span>Welcome to</span> Rednex Pharmaceuticals
            </SectionHeading>
            <SectionPara>
              <p>
                Rednex Pharmaceuticals is a recently established an inventive
                Medicine manufacture company in Gujarat, Ahmedabad (India).
              </p>
              <p>
                Rednex Pharmaceuticals is a globally integrated pharmaceutical
                company offering a wide range of products and services to our
                customers across geographies. We organize our business into two
                segments, Oral liquid external preparations like gel, cream,
                ointment, lotion etc..
              </p>
              <p>
                Our central focus is on the research and development of the
                advanced Medicine to provide the highest-quality end products to
                our clients.
              </p>
            </SectionPara>
            <ReadMoreButton>
              <Link href="/about-us">
                <a>
                  Read More
                  <ArrowRightAltIcon style={{ margin: "0 0 0 3px" }} />
                </a>
              </Link>
            </ReadMoreButton>
          </Container>
        </WelcomeSection>
      </Layout>
    </>
  );
};

export default Home;
