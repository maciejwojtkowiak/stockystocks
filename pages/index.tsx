import type { NextPage } from "next";
import MainPage from "../components/Home/MainPage";
import { GetStaticProps } from "next";
import { getDataFromMongo } from "../helpers/getDataFromMongo";
import { InferGetStaticPropsType } from "next";
import { Asset } from "../types/assetType";

const Home: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return <MainPage asset={props.assets} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const assetsId = await getDataFromMongo();

  const promises = assetsId.map(async (id: string) => {
    const response = await fetch(`https://rest.coinapi.io/v1/assets/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CoinAPI-Key": "EB201340-DF56-494E-BA6F-9524985EA13C",
      },
    });
    return await response.json();
  });

  return {
    props: {
      assets: (await Promise.all(promises)).flat(),
    },
    revalidate: 3600,
  };
};

export default Home;
