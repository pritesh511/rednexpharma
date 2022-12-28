import React, { useState } from "react";
import Layout from "../../components/layout";

const blogDetails = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  return (
    <Layout>
      <div
        style={{ maxWidth: "1000px", margin: "50px auto", padding: "0 20px" }}
      >
        <h1 style={{ textAlign: "center", margin: "30px 0" }}>{blog.title}</h1>
        <p>{blog.description}</p>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `http://localhost:3000/api/getblogs?slug=${context.query.slug}`
  );
  const myBlog = await res.json();
  // Pass data to the page via props
  return { props: { myBlog } };
}

export default blogDetails;
