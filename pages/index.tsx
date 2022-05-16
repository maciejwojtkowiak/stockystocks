import type { NextPage } from "next";
import MainPage from "../components/Home/MainPage";
import { GetStaticProps } from "next";
import { getDataFromMongo } from "../helpers/getDataFromMongo";
import { InferGetStaticPropsType } from "next";
import { AssetFromDb } from "../types/assetType";

const Home: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  console.log(props.mongoAssets);
  return <MainPage />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const assets = await getDataFromMongo();
  return {
    props: {
      mongoAssets: assets,
    },
  };
};

export default Home;
