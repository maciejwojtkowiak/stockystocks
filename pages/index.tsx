import type { NextPage } from "next";
import MainPage from "../components/Home/MainPage";
import { GetStaticProps } from "next";
import { getDataFromMongo } from "../helpers/getDataFromMongo";
import { InferGetStaticPropsType } from "next";
import { Asset } from "../types/assetType";
import { useDispatch } from "react-redux";
import { AssetAction } from "../store/asset-slice";
import { useEffect } from "react";
import getBoughtAssets from "../helpers/getBoughtAssets";
import getMoney from "../helpers/getMoney";

const Home: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AssetAction.setFetchedAssets(props.assets));
    dispatch(AssetAction.setBoughtAssets(props.boughtAssets));
    dispatch(AssetAction.setBalance(props.money));
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
  const boughtAssets = await getBoughtAssets();
  const money = await getMoney();

  return {
    props: {
      boughtAssets: boughtAssets,
      assets: (await Promise.all(promises)).flat(),
      money: money,
    },
    revalidate: 10,
  };
};

export default Home;
