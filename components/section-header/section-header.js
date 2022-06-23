import Link from "next/link";
import { Container } from "../../styles/commonStyles";
import { BannerBlock, BannerSection, BreadCrum, Line, Slash } from "./styles";

const SectionHeader = () => {
  return (
    <>
      <BannerSection>
        <Container>
          <BannerBlock>
            <h1>About Us</h1>
            <Line></Line>
          </BannerBlock>
          <BreadCrum>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Slash>/</Slash>
            <span>About Us</span>
          </BreadCrum>
        </Container>
      </BannerSection>
    </>
  );
};

export default SectionHeader;
