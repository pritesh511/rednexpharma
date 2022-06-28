import Image from "next/image";
import { Icon } from "@mui/material";
import Layout from "../components/layout";
import SectionHeader from "../components/section-header/section-header";
import {
  BottoContent,
  ColLeft,
  ColRight,
  ContactBlock,
  ContactHeading,
  ContactRow,
  MapSection,
  TopFlex,
} from "../styles/contactPageStyles";
import { NextSeo } from "next-seo";

const Contact = () => {
  return (
    <>
      <NextSeo
        title="Contact Us | Rednex Pharmaceuticals"
        description="Rednex Pharmaceuticals"
      />
      <Layout>
        <SectionHeader
          heading="contact us"
          patentPage="Contact Us"
          childPage=""
        />
        <MapSection>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117551.18382077677!2d72.41699136235344!3d22.96957286835249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e97ded1048835%3A0x90cc975fd3e5614e!2sRednex+Pharmaceuticals!5e0!3m2!1sen!2sin!4v1557027855115!5m2!1sen!2sin"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: "0", display: "flex" }}
            allowfullscreen=""
          ></iframe>
          <ContactBlock>
            <ContactHeading>REDNEX PHARMACEUTICALS</ContactHeading>
            <ContactRow>
              <ColLeft>
                <TopFlex>
                  <Icon>
                    <Image
                      src="/images/location-icon.png"
                      alt="location-icon"
                      width={16}
                      height={24}
                    />
                  </Icon>
                  <h3>Address</h3>
                </TopFlex>
                <BottoContent>
                  <p>L.S. No-142, Nr. HBS,</p>
                  <p>Chacharvadi Vasna,</p>
                  <p>Ta: Sanand, Ahmedabad-382213,</p>
                  <p>Gujarat, India,</p>
                </BottoContent>
              </ColLeft>
              <ColRight>
                <TopFlex>
                  <Icon>
                    <Image
                      src="/images/phone-icon.png"
                      alt="location-icon"
                      width={19}
                      height={24}
                    />
                  </Icon>
                  <h3>Phone Number</h3>
                </TopFlex>
                <BottoContent>
                  <p>+ 91 97244 77890</p>
                  <p>+ 91 96245 44103</p>
                  <p>+ 91 84909 35293</p>
                </BottoContent>
              </ColRight>
            </ContactRow>
          </ContactBlock>
        </MapSection>
      </Layout>
    </>
  );
};

export default Contact;
