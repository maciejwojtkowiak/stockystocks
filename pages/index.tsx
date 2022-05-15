import type { NextPage } from "next";
import MainPage from "../components/Home/MainPage";
import { GetStaticProps } from "next";
import { getDataFromMongo } from "../components/helpers/getDataFromMongo";

const Home: NextPage = (props) => {
  return <MainPage />;
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
