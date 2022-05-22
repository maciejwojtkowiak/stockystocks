import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { Asset, BoughtAsset } from "../../types/assetType";

interface funcProps {
  asset: Asset;
}

const BuyForm: React.FC<funcProps> = (props) => {
  const [quantity, setQuantity] = useState<number>(0);
  const balance = useSelector((state: RootState) => state.assets.balance);
  const onBuyHandler = async () => {
    const boughtAsset: BoughtAsset = {
      asset: props.asset,
      quantity: quantity,
    };
    const costOfTransaction = boughtAsset.asset.price_usd * quantity;
    if (costOfTransaction > +balance) {
      console.log("Assets is too expensive!");
    }
    await fetch("/api/", {
      method: "POST",
      body: JSON.stringify(boughtAsset),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const onInputChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(+e.target.value);
  };
  return (
    <form>
      <input placeholder="quantity" onChange={onInputChangeQuantity} />
      <button onClick={onBuyHandler}>Buy!</button>
    </form>
  );
};

export default BuyForm;
