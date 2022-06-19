import { NextSeo } from "next-seo";
import Carousel from "../components/carousel/carousel";
import Layout from "../components/layout";

const Home = () => {
  return (
    <>
      <NextSeo
        title="Home | Rednex Pharmaceuticals"
        description="Rednex Pharmaceuticals"
      />
      <Layout>
        <Carousel />
      </Layout>
    </>
  );
};

export default Home;
