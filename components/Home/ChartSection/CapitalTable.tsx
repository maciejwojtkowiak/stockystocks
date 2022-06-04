import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/Store";
import { Asset, BoughtAsset } from "../../../types/assetType";

const CapitalTable = () => {
  // pobaw się z bought assetami i zrob aktualna cene co odswiezenie
  const [actualBoughtAssetsList, setActualBoughtAssetsList] = useState<Asset[]>(
    []
  );
  console.log(actualBoughtAssetsList);
  const money = +useSelector((state: RootState) => state.assets.balance);
  const boughtAssets = useSelector(
    (state: RootState) => state.assets.boughtAssets
  );
  const boughtIds = [] as string[];
  boughtAssets.map((asset) => boughtIds.push(asset.asset.asset_id));
  const actualBoughtAssets = boughtIds.map(async (id: string) => {
    const response = await fetch(`https://rest.coinapi.io/v1/assets/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CoinAPI-Key": "EB201340-DF56-494E-BA6F-9524985EA13C",
      },
    });
    return await response.json();
  });
  const getActualBoughtAssets = async () => {
    const data = await Promise.all(actualBoughtAssets);
    console.log("data");
    console.log(data);
    setActualBoughtAssetsList(data);
  };

  useEffect(() => {
    getActualBoughtAssets();
  }, []);

  const total = +actualBoughtAssetsList.reduce((acc, cur) => {
    const foundBoughtAsset = boughtAssets.find(
      (asset) => asset.asset.asset_id === cur.asset_id
    ) as BoughtAsset;
    return acc + cur.price_usd * foundBoughtAsset?.quantity;
  }, 0);

  const totalBalance = (money + total).toFixed(2);

  return (
    <div className=" mt-16 grid grid-cols-capital-fill gap-2 mx-2 items-center">
      <p className="text-center text-center bg-green-300 p-2">
        Free Money <span className="block">{money.toFixed(2)}$</span>
      </p>
      <p className="text-center bg-green-300 p-2">
        Money in assets<span className="block">{total.toFixed(2)}$</span>
      </p>
      <p
        className="text-center bg-green-300 p-2
      "
      >
        Total capital <span className="block">{totalBalance}$</span>
      </p>
    </div>
  );
};

export default CapitalTable;
