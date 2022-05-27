import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { Asset, BoughtAsset } from "../../types/assetType";

interface funcProps {
  asset: Asset;
  buyForm: Boolean;
}

const TransactionForm: React.FC<funcProps> = (props) => {
  const [quantity, setQuantity] = useState<number>(0);
  const balance = useSelector((state: RootState) => state.assets.balance);
  console.log(balance);
  const onBuyHandler = async () => {
    const boughtAsset: BoughtAsset = {
      asset: props.asset,
      quantity: quantity,
    };
    const costOfTransaction = boughtAsset.asset.price_usd * quantity;
    if (costOfTransaction > +balance) {
      console.log("Assets is too expensive!");
    }
    if (props.buyForm || !props.buyForm) {
      await fetch(`/api/transactions/${props.buyForm ? "buy" : "sell"}`, {
        method: "POST",
        body: JSON.stringify(boughtAsset),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };

  const onInputChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(+e.target.value);
  };
  return (
    <form>
      <input placeholder="quantity" onChange={onInputChangeQuantity} />
      <button onClick={onBuyHandler}>{props.buyForm ? "Buy!" : "Sell!"}</button>
    </form>
  );
};

export default TransactionForm;
