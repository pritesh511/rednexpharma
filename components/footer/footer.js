import { Container } from "../../styles/commonStyles";
import {
  CopyRightText,
  FooteBottomBlock,
  FooterColumn,
  FooterHeading,
  FooterItem,
  FooterList,
  FooterLogo,
  FooterPageItem,
  FooterPageList,
  FooterPara,
  FooterRow,
  FooterSection,
  SocialBlock,
} from "./styles";
import Link from "next/link";
import Image from "next/image";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkIcon from "@mui/icons-material/Link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Footer = () => {
  return (
    <>
      <FooterSection>
        <Container>
          <FooterRow>
            <FooterColumn>
              <FooterLogo>
                <Link href="/">
                  <a>
                    <Image
                      src="/images/footer_logo.png"
                      alt="footer-logo"
                      width={230}
                      height={55}
                    />
                  </a>
                </Link>
              </FooterLogo>
              <FooterPara>
                Rednex Pharmaceuticals is leading Gujarat based pharma company
                located at Ahmedabad in Chacharvadi Vasna area.
              </FooterPara>
            </FooterColumn>
            <FooterColumn>
              <FooterHeading>
                <ApartmentIcon style={{ margin: "0 8px 0 0" }} />
                Corporate Office Address
              </FooterHeading>
              <FooterList>
                <FooterItem>
                  <FooterPara>L.S. No-142, Nr. HBS,</FooterPara>
                </FooterItem>
                <FooterItem>
                  <FooterPara>Chacharvadi Vasna,</FooterPara>
                </FooterItem>
                <FooterItem>
                  <FooterPara>Ta: Sanand, Ahmedabad-382213,</FooterPara>
                </FooterItem>
                <FooterItem>
                  <FooterPara>Gujarat, India</FooterPara>
                </FooterItem>
              </FooterList>
            </FooterColumn>
            <FooterColumn>
              <FooterHeading>
                <PermContactCalendarOutlinedIcon
                  style={{ margin: "0 8px 0 0" }}
                />
                Contact Details
              </FooterHeading>
              <FooterList>
                <FooterItem>
                  <Link href="tel:+919724477890">
                    <a>
                      <ContactPhoneIcon
                        style={{ fontSize: "large", margin: "0 8px 0 0" }}
                      />
                      + 91 97244 77890
                    </a>
                  </Link>
                </FooterItem>
                <FooterItem>
                  <Link href="tel:+919624544103">
                    <a>
                      <ContactPhoneIcon
                        style={{ fontSize: "large", margin: "0 8px 0 0" }}
                      />
                      + 91 96245 44103
                    </a>
                  </Link>
                </FooterItem>
                <FooterItem>
                  <Link href="tel:+918490935293">
                    <a>
                      <ContactPhoneIcon
                        style={{ fontSize: "large", margin: "0 8px 0 0" }}
                      />
                      + 91 84909 35293
                    </a>
                  </Link>
                </FooterItem>
                <FooterItem>
                  <Link href="mailto:rednexpharma@gmail.com">
                    <a>
                      <EmailIcon
                        style={{ fontSize: "large", margin: "0 8px 0 0" }}
                      />
                      rednexpharma@gmail.com
                    </a>
                  </Link>
                </FooterItem>
              </FooterList>
            </FooterColumn>
            <FooterColumn>
              <FooterHeading>
                <LinkIcon style={{ margin: "0 8px 0 0" }} />
                Important Links
              </FooterHeading>
              <FooterPageList>
                <FooterPageItem>
                  <Link href="/">
                    <a>
                      <ChevronRightIcon />
                      Home
                    </a>
                  </Link>
                </FooterPageItem>
                <FooterPageItem>
                  <Link href="/about-us">
                    <a>
                      <ChevronRightIcon />
                      About Us
                    </a>
                  </Link>
                </FooterPageItem>
                <FooterPageItem>
                  <Link href="/enquiry">
                    <a>
                      <ChevronRightIcon />
                      Enquiry
                    </a>
                  </Link>
                </FooterPageItem>
                <FooterPageItem>
                  <Link href="/contact-us">
                    <a>
                      <ChevronRightIcon />
                      Contact
                    </a>
                  </Link>
                </FooterPageItem>
              </FooterPageList>
            </FooterColumn>
          </FooterRow>
          <FooteBottomBlock>
            <CopyRightText>
              © 2022 Rednex Pharmaceuticals. All Rights Reserved
            </CopyRightText>
            <SocialBlock>
              <span>Follow us on :</span>
              <Link href="https://www.facebook.com/Rednex-Pharmaceuticals-597208590752806/">
                <a>
                  <Image
                    src="/images/facebook_icon.svg"
                    alt="facebook-icon"
                    width={32}
                    height={32}
                  />
                </a>
              </Link>
            </SocialBlock>
          </FooteBottomBlock>
        </Container>
      </FooterSection>
    </>
  );
};

export default Footer;
