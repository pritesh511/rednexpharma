import Link from "next/link";
import { Container } from "../../styles/commonStyles";
import { BannerBlock, BannerSection, BreadCrum, Line, Slash } from "./styles";

const SectionHeader = (props) => {
  const { heading, patentPage } = props;

  return (
    <>
      <BannerSection>
        <Container>
          <BannerBlock>
            <h1>{heading}</h1>
            <Line></Line>
          </BannerBlock>
          <BreadCrum>
            <Link href="/">Home</Link>
            <Slash>/</Slash>
            <span>{patentPage}</span>
          </BreadCrum>
        </Container>
      </BannerSection>
    </>
  );
};

export default SectionHeader;
