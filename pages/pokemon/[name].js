import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";
import { Container } from "../../styles/commonStyles";

const Name = (props) => {
  const { data } = props;
  console.log(data);

  return (
    <Layout>
      <Container>
        <div style={{ margin: "50px 0" }}>
          <h1 style={{ margin: "10px 0" }}>{data.name}</h1>
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>Base Experience:</span>{" "}
              {data.base_experience}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Height:</span> {data.height}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Weight:</span> {data.weight}
            </li>
          </ul>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <li>
              <Image
                src={data.sprites.back_default}
                width={150}
                height={150}
                alt="image"
              ></Image>
            </li>
            <li>
              <Image
                src={data.sprites.back_shiny}
                width={150}
                height={150}
                alt="image"
              ></Image>
            </li>
            <li>
              <Image
                src={data.sprites.front_default}
                width={150}
                height={150}
                alt="image"
              ></Image>
            </li>
            <li>
              <Image
                src={data.sprites.front_shiny}
                width={150}
                height={150}
                alt="image"
              ></Image>
            </li>
          </ul>
        </div>
      </Container>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const posts = await res.json();
  const paths = posts.results.map((currElem) => {
    return {
      params: { name: currElem.name },
    };
  });
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.params.name}`
  );
  const posts = await res.json();
  return {
    props: { data: posts }, // will be passed to the page component as props
  };
}

export default Name;
