import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notificationAction } from "../../store/notification-slice";
import { RootState } from "../../store/Store";
import { Asset, BoughtAsset } from "../../types/assetType";

interface funcProps {
  asset: Asset;
  buyForm: Boolean;
}

const TransactionForm: React.FC<funcProps> = (props) => {
  const [quantity, setQuantity] = useState<number>(0);
  const balance = useSelector((state: RootState) => state.assets.balance);
  const dispatch = useDispatch();
  const onBuyHandler = async () => {
    const boughtAsset: BoughtAsset = {
      asset: props.asset,
      quantity: quantity,
    };
    const costOfTransaction = boughtAsset.asset.price_usd * quantity;
    if (costOfTransaction > +balance) {
      dispatch(
        notificationAction.handleNotification({
          message: "You do not have enough money",
          isShown: true,
        })
      );
    }
    if (costOfTransaction <= +balance) {
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
