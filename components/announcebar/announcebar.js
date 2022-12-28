import Link from "next/link";
import { Container } from "../../styles/commonStyles";
import {
  AnnounceLeft,
  AnnounceRight,
  AnnounceRow,
  AnnounceSection,
  ContactItem,
  ContactList,
  ContactSpan,
  DownloadButton,
} from "./styles";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Announcebar = () => {
  return (
    <>
      <AnnounceSection>
        <Container>
          <AnnounceRow>
            <AnnounceLeft>
              <DownloadButton>
                <Link href="/">
                  <DownloadIcon style={{ fontSize: "medium" }} />
                  <span>Download Product Brochure</span>
                </Link>
              </DownloadButton>
            </AnnounceLeft>
            <AnnounceRight>
              <ContactSpan>Contact us :</ContactSpan>
              <ContactList>
                <ContactItem>
                  <Link href="mailto:rednexpharma@gmail.com">
                    <EmailIcon style={{ fontSize: "medium" }} />
                    <span>rednexpharma@gmail.com</span>
                  </Link>
                </ContactItem>
                <ContactItem>
                  <Link href="tel:+919724477890">
                    <LocalPhoneIcon style={{ fontSize: "medium" }} />
                    <span>+ 91 97244 77890</span>
                  </Link>
                </ContactItem>
                <ContactItem>
                  <Link href="tel:+919624544103">
                    <LocalPhoneIcon style={{ fontSize: "medium" }} />
                    <span>+ 91 96245 44103</span>
                  </Link>
                </ContactItem>
                <ContactItem>
                  <Link href="tel:+918490935293">
                    <LocalPhoneIcon style={{ fontSize: "medium" }} />
                    <span>+ 91 84909 35293</span>
                  </Link>
                </ContactItem>
              </ContactList>
            </AnnounceRight>
          </AnnounceRow>
        </Container>
      </AnnounceSection>
    </>
  );
};
export default Announcebar;
