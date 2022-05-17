import type { NextPage } from "next";
import MainPage from "../components/Home/MainPage";
import { GetStaticProps } from "next";
import { getDataFromMongo } from "../helpers/getDataFromMongo";
import { InferGetStaticPropsType } from "next";
import { Asset } from "../types/assetType";

const Home: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const assetsArray = [] as Asset[];
  const idsArr = props.assets as string[];
  idsArr.forEach((asset: string) => {
    const getAssets = async () => {
      const response = await fetch(
        `https://rest.coinapi.io/v1/assets/${asset}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-CoinAPI-Key": "EB201340-DF56-494E-BA6F-9524985EA13C",
          },
        }
      );
      const data = await response.json();
      assetsArray.push(data);
    };
    getAssets();
  });
  console.log(assetsArray);
  console.log("It is an asset" + props.assets);
  return <MainPage asset={props.assets} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  // Po zwroceniu tablicy zrob fetch kryptowaluty dla kazdego i przekaż dalej
  const assetsId = await getDataFromMongo();

  return {
    props: {
      assets: assetsId,
    },
    revalidate: 1,
  };
};

export default Home;
