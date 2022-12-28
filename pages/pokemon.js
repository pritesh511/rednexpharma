import Link from "next/link";
import React from "react";
import Layout from "../components/layout";
import { Container } from "../styles/commonStyles";

const Pokemon = (props) => {
  const { data } = props;

  return (
    <Layout>
      <Container>
        {data.map((currItem, index) => {
          return (
            <div key={index} style={{ margin: "40px 0" }}>
              <h1 style={{ margin: "10px 0" }}>
                {index + 1} {currItem.name}
              </h1>
              <div style={{ color: "red" }}>
                <Link href={`/pokemon/${currItem.name}`}>
                  click here to know more about {currItem.name}
                </Link>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          );
        })}
      </Container>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const posts = await res.json();

  return {
    props: { data: posts.results }, // will be passed to the page component as props
  };
}

export default Pokemon;
