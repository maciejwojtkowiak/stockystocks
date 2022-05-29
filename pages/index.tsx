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
import getHistoricalCapital from "../helpers/getHistoricalCapital";

const Home: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AssetAction.setFetchedAssets(props.assets));
    dispatch(AssetAction.setBoughtAssets(props.boughtAssets));
    dispatch(AssetAction.setBalance(props.money));
    dispatch(AssetAction.setHistoricalCapital(props.historicalCapital));
  }, []);

  return <MainPage assets={props.assets} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const assetsId = await getDataFromMongo();
  process.env.COIN_API_KEY!.toString();

  const assetsPromises = assetsId.map(async (id: string) => {
    const response = await fetch(`https://rest.coinapi.io/v1/assets/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CoinAPI-Key": process.env.COIN_API_KEY!.toString(),
      },
    });
    return await response.json();
  });
  const boughtAssets = await getBoughtAssets();
  const money = await getMoney();
  const historicalCapital = await getHistoricalCapital();

  return {
    props: {
      boughtAssets: boughtAssets,
      assets: (await Promise.all(assetsPromises)).flat(),
      money: money,
      historicalCapital: historicalCapital,
    },
    revalidate: 3600,
  };
};

export default Home;
