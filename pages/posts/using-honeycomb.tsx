import Layout from "../../src/screens/Post/Layout";

type TODO = any;

const postId = "using-honeycomb";

export async function getStaticProps() {
  const data = await import("../../publishable/blog-engine/next/prerender");
  return await data.getStaticProps(postId);
}

export default function Page(props: TODO) {
  const { content, metadata } = props;
  return <Layout content={content} metadata={metadata} />;
}