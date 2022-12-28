import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../components/layout";

const product = (props) => {
  const [blogData, setBlogData] = useState(props.allBlogs);

  return (
    <Layout>
      <React.Fragment>
        <h1 style={{ textAlign: "center", margin: "30px 0" }}>
          Top Trending Blogs
        </h1>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto 30px auto",
            padding: "0 20px",
          }}
        >
          {blogData.map((item, index) => {
            return (
              <div key={index} style={{ margin: "30px 0" }}>
                <div style={{ color: "red" }}>
                  <Link href={`blog/${item?.slug}`}>{item?.title}</Link>
                </div>
                <p style={{ margin: 0 }}>{item?.description}</p>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    </Layout>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("http://localhost:3000/api/blog");
  const allBlogs = await res.json();
  // Pass data to the page via props
  return { props: { allBlogs } };
}

export default product;
