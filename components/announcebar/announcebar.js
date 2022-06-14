import Link from "next/link";
import { Container } from "../../styles/commonStyles";
import {
  AnnounceLeft,
  AnnounceRight,
  AnnounceRow,
  AnnounceSection,
  DownloadButton,
} from "./styles";

const Announcebar = () => {
  return (
    <>
      <AnnounceSection>
        <Container>
          <AnnounceRow>
            <AnnounceLeft>
              <DownloadButton>
                <Link href="/">
                  <a>Download Product Brochure</a>
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
