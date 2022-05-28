import Btc from "../../images/btc.jpg";
import Image from "next/image";
import { Asset } from "../../types/assetType";
import { FaTrash } from "react-icons/fa";
import React, { useState } from "react";
import DetailedAssetCardData from "./DetailedAssetCardData";
import BuyForm from "../Buy/TransactionForm";
import { useDispatch, useSelector } from "react-redux";
import { AssetAction } from "../../store/asset-slice";
import { RootState } from "../../store/Store";
import TransactionForm from "../Buy/TransactionForm";

interface funcProps {
  asset?: Asset;
  isSearched: boolean;
}

const DetailedAssetCard: React.FC<funcProps> = (props) => {
  const dispatch = useDispatch();

  const [buyFormIsShown, setBuyFormIsShown] = useState<boolean>(false);
  const [sellFormIsShown, setSellFormIsShown] = useState<boolean>(false);
  // it is func when user search for item
  const onAddToFavHandler = async () => {
    await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify(props.asset?.asset_id),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const onDeleteHandler = async () => {
    dispatch(AssetAction.deleteFetchedAsset(props.asset!.asset_id));
    await fetch("/api/", {
      method: "DELETE",
      body: JSON.stringify(props.asset?.asset_id),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const onShowBuyFormHandler = () => {
    setBuyFormIsShown(true);
  };
  const onShowSellFormHandler = () => {
    setSellFormIsShown(true);
  };

  // favs cards
  console.log("link");
  console.log(props.asset?.imgLink);

  return (
    <React.Fragment>
      {props.asset && (
        <React.Fragment>
          <div className=" h-full bg-gray-100 rounded-lg grid grid-cols-auto-full  drop-shadow-2xl relative  ">
            <div className="w-32 h-32 rounded-full grid self-center   ">
              <img src={props.asset.imgLink} alt="icon" />
            </div>
            <div className=" grid grid-cols-fill-40 place-items-center grid-rows-2 auto-rows-min my-6 text-center">
              <DetailedAssetCardData asset={props.asset!} />
              <div className="lg:col-start-3 text-2xl">
                <button
                  onClick={onShowBuyFormHandler}
                  className="shadow-lg bg-green-400 shadow-green-500/50 px-4 py-1 mr-4"
                >
                  Buy
                </button>
                <button
                  onClick={onShowSellFormHandler}
                  className="shadow-lg bg-red-500 shadow-red-500/50 px-4 py-1"
                >
                  Sell
                </button>
                {props.isSearched && (
                  <button
                    onClick={onAddToFavHandler}
                    className="shadow-lg bg-blue-500 shadow-blue-500/50 px-4 py-1"
                  >
                    Add to fav
                  </button>
                )}
              </div>
            </div>
            <button onClick={onDeleteHandler}>
              {!props.isSearched && (
                <FaTrash className="absolute top-3 right-5" />
              )}
            </button>
            {buyFormIsShown && (
              <TransactionForm buyForm={true} asset={props.asset!} />
            )}
            {sellFormIsShown && (
              <TransactionForm buyForm={false} asset={props.asset!} />
            )}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default DetailedAssetCard;
