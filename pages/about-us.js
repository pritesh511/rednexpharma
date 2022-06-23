import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import SectionHeader from "../components/section-header/section-header";

const About = () => {
  return (
    <>
      <NextSeo
        title="About Us | Rednex Pharmaceuticals"
        description="Rednex Pharmaceuticals"
      />
      <Layout>
        <SectionHeader />
      </Layout>
    </>
  );
};

export default About;
