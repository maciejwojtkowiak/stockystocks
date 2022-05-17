import type { NextPage } from "next";
import MainPage from "../components/Home/MainPage";
import { GetStaticProps } from "next";
import { getDataFromMongo } from "../helpers/getDataFromMongo";
import { InferGetStaticPropsType } from "next";

const Home: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  console.log(props.assets);
  return <MainPage asset={props.assets} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const assets = await getDataFromMongo();
  return {
    props: {
      assets: assets,
    },
  };
};

export default Home;
