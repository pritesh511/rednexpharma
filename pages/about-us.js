import Image from "next/image";
import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import SectionHeader from "../components/section-header/section-header";
import {
  AboutBlock,
  AboutLeft,
  AboutRight,
  VisionBlock,
  VisionHeading,
  VisionInnerBlock,
  VisionList,
  VisionSection,
  VisonDataBlock,
  VisonListItem,
} from "../styles/aboutPageStyles";
import { Container, FcSection, SectionHeading } from "../styles/commonStyles";

const About = () => {
  return (
    <>
      <NextSeo
        title="About Us | Rednex Pharmaceuticals"
        description="Rednex Pharmaceuticals"
      />
      <Layout>
        <SectionHeader heading="About Us" patentPage="About Us" childPage="" />
        <FcSection>
          <Container>
            <SectionHeading>
              ABOUT <span>REDNEX</span> PHARMACEUTICALS
            </SectionHeading>
            <AboutBlock>
              <AboutLeft>
                <p>
                  Rednex Pharmaceuticals is a recently established an inventive
                  Medicine manufacture company in Gujarat, Ahmedabad (India).
                </p>
                <p>
                  <b>Rednex Pharmaceuticals</b> a globally integrated
                  pharmaceutical company offering a wide range of products and
                  services to our customers across geographies. We organize our
                  business into two segments, Oral liquid external preparations
                  like gel, cream, ointment, lotion etc..
                </p>
                <p>
                  Our central focus is on the research and development of the
                  advanced Medicine to provide the highest-quality end products
                  to our clients.
                </p>
                <p>
                  We supply our products and services to customers over India.
                  We manufacture in Ahmedabad in Chacharvadi Vasna area, coupled
                  with Research and Development centers in India. In addition,
                  we have a distribution network of more than 150+ distributors
                  across the India.
                </p>
              </AboutLeft>
              <AboutRight>
                <Image
                  src="/images/about-us.jpg"
                  alt="about-image"
                  width={457}
                  height={305}
                  layout="responsive"
                />
              </AboutRight>
            </AboutBlock>
          </Container>
        </FcSection>
        <VisionSection>
          <Container>
            <VisionBlock>
              <VisonDataBlock>
                <VisionInnerBlock>
                  <VisionHeading>
                    Our <span>Vision</span>
                  </VisionHeading>
                  <VisionList>
                    <VisonListItem>
                      To Acquire and maintain global leadership position in
                      chosen area of Businesses
                    </VisonListItem>
                    <VisonListItem>
                      To continuously create new opportunities for growth in our
                      strategic businesses
                    </VisonListItem>
                    <VisonListItem>
                      To be among the top 100 most admired companies to work for
                    </VisonListItem>
                  </VisionList>
                </VisionInnerBlock>
              </VisonDataBlock>
              <VisonDataBlock>
                <VisionInnerBlock>
                  <VisionHeading>
                    Core <span>Values</span>
                  </VisionHeading>
                  <VisionList>
                    <VisonListItem>
                      We will carefully select, train and develop our people to
                      be creative and empower them to take decisions, so that
                      they respond to all stakeholders with agility, confidence
                      and teamwork.
                    </VisonListItem>
                    <VisonListItem>
                      We stretch ourselves to be cost effective and efficient in
                      all aspects of our operations and focus on flawless
                      delivery to create and provide the best value to our
                      stakeholders.
                    </VisonListItem>
                  </VisionList>
                </VisionInnerBlock>
              </VisonDataBlock>
            </VisionBlock>
          </Container>
        </VisionSection>
      </Layout>
    </>
  );
};

export default About;
