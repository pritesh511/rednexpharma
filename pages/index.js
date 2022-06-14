import { NextSeo } from "next-seo";
import Layout from "../components/layout";

const Home = () => {
  return (
    <>
      <NextSeo
        title="Home | Rednex Pharmaceuticals"
        description="Rednex Pharmaceuticals"
      />
      <Layout>
        <h1>home page</h1>
      </Layout>
    </>
  );
};

export default Home;
