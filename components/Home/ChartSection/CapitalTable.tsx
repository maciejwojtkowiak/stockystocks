import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import updateCapital from "../../../helpers/updateCapital";
import { RootState } from "../../../store/Store";
import { Asset, BoughtAsset } from "../../../types/assetType";
// 9013$
const CapitalTable = () => {
  const [actualBoughtAssetsList, setActualBoughtAssetsList] = useState<Asset[]>(
    []
  );
  const [moneyInAssets, setMoneyInAssets] = useState<number>(0);
  const [totalMoney, setTotalMoney] = useState<number>(0);

  const money = +useSelector((state: RootState) => state.assets.balance);
  const boughtAssets = useSelector(
    (state: RootState) => state.assets.boughtAssets
  );
  const getActualBoughtAssets = async () => {
    const boughtIds = [] as string[];
    boughtAssets.map((asset) => boughtIds.push(asset.asset.asset_id));
    const fetchActualBoughtAsset = boughtIds.map(async (id: string) => {
      const response = await fetch(`https://rest.coinapi.io/v1/assets/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-CoinAPI-Key": "EB201340-DF56-494E-BA6F-9524985EA13C",
        },
      });

      return await response.json();
    });

    const data = (await Promise.all(fetchActualBoughtAsset)).flat();
    setActualBoughtAssetsList(data);
  };

  useEffect(() => {
    getActualBoughtAssets();
  }, [boughtAssets.length]);

  useEffect(() => {
    if (actualBoughtAssetsList) {
      const moneyInAssets = +actualBoughtAssetsList.reduce((acc, cur) => {
        const foundBoughtAsset = boughtAssets.find(
          (asset) => asset.asset.asset_id === cur.asset_id
        ) as BoughtAsset;
        return acc + cur.price_usd * foundBoughtAsset?.quantity;
      }, 0);
      const totalBalance = (money + moneyInAssets).toFixed(2);
      setMoneyInAssets(moneyInAssets);

      setTotalMoney(+totalBalance);

      fetch("/api/updateCapital", {
        body: JSON.stringify(+totalBalance),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }, [actualBoughtAssetsList.length]);

  return (
    <div className=" mt-16 grid grid-cols-capital-fill gap-2 mx-2 items-center">
      <p className="text-center text-center bg-green-300 p-2">
        Free Money <span className="block">{money.toFixed(2)}$</span>
      </p>
      <p className="text-center bg-green-300 p-2">
        Money in assets
        <span className="block">{moneyInAssets.toFixed(2)}$</span>
      </p>
      <p
        className="text-center bg-green-300 p-2
      "
      >
        Total capital <span className="block">{totalMoney.toFixed(2)}$</span>
      </p>
    </div>
  );
};

export default CapitalTable;
