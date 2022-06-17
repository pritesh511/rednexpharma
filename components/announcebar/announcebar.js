import Link from "next/link";
import { Container } from "../../styles/commonStyles";
import {
  AnnounceLeft,
  AnnounceRight,
  AnnounceRow,
  AnnounceSection,
  DownloadButton,
} from "./styles";
import { FaDownload } from "react-icons/fa";

const Announcebar = () => {
  return (
    <>
      <AnnounceSection>
        <Container>
          <AnnounceRow>
            <AnnounceLeft>
              <DownloadButton>
                <Link href="/">
                  <a>
                    <FaDownload />
                    <span>Download Product Brochure</span>
                  </a>
                </Link>
              </DownloadButton>
            </AnnounceLeft>
            <AnnounceRight></AnnounceRight>
          </AnnounceRow>
        </Container>
      </AnnounceSection>
    </>
  );
};
export default Announcebar;
