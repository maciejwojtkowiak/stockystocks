import type { NextPage } from "next";
import MainPage from "../components/Home/MainPage";
import { GetStaticProps } from "next";
import { getDataFromMongo } from "../helpers/getDataFromMongo";
import { InferGetStaticPropsType } from "next";
import { Asset } from "../types/assetType";
import { useDispatch } from "react-redux";
import { AssetAction } from "../store/asset-slice";
import { useEffect } from "react";

const Home: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AssetAction.setFetchedAssets(props.assets));
  }, []);

  return <MainPage assets={props.assets} />;
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
    revalidate: 10,
  };
};

export default Home;
