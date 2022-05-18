import React, { useState } from "react";
import { Asset, BoughtAsset } from "../../types/assetType";

interface funcProps {
  asset: Asset;
}

const BuyForm: React.FC<funcProps> = (props) => {
  const [quantity, setQuantity] = useState<number>(0);
  const onBuyHandler = async () => {
    const boughtAsset: BoughtAsset = {
      asset: props.asset,
      quantity: quantity,
    };
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
