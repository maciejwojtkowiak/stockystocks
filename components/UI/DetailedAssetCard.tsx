import Btc from "../../images/btc.jpg";
import Image from "next/image";
import { Asset } from "../../types/assetType";
import { FaTrash } from "react-icons/fa";
import React from "react";
import DetailedAssetCardData from "./DetailedAssetCardData";

interface funcProps {
  asset?: Asset;
  isSearched: boolean;
}

const DetailedAssetCard: React.FC<funcProps> = (props) => {
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

  // favs cards
  if (!props.isSearched && props.asset) {
    return (
      <React.Fragment>
        <div className=" h-full bg-gray-100 rounded-lg grid grid-cols-auto-full  drop-shadow-2xl relative  ">
          <div className="w-32 h-32 rounded-full grid self-center   ">
            <Image src={Btc} alt="" />
          </div>
          <div className=" grid grid-cols-fill-40 place-items-center grid-rows-2 auto-rows-min my-6 text-center">
            <DetailedAssetCardData asset={props.asset} />
            <div className="lg:col-start-3 text-2xl">
              <button className="shadow-lg bg-green-400 shadow-green-500/50 px-4 py-1 mr-4">
                Buy
              </button>
              <button className="shadow-lg bg-red-500 shadow-red-500/50 px-4 py-1">
                Sell
              </button>
            </div>
          </div>
          <button>
            <FaTrash className="absolute top-3 right-5" />
          </button>
        </div>
      </React.Fragment>
    );
  }

  // It is card when user searched
  return (
    <React.Fragment>
      {props.isSearched && (
        <div className=" h-full bg-gray-100 rounded-lg grid grid-cols-auto-full  drop-shadow-2xl  ">
          <div className="w-32 h-32 rounded-full grid self-center   ">
            <Image src={Btc} alt="" />
          </div>
          <div className=" grid grid-cols-fill-40 place-items-center grid-rows-2 auto-rows-min my-6 text-center">
            <p>
              Hello
              <span className="block ">
                {props.asset !== undefined ? props.asset.name : ""}
              </span>
            </p>
            <p>
              Hello <span className="block ">123</span>
            </p>
            <p>
              Hello <span className="block ">123</span>
            </p>
            <p>
              Hello <span className="block  ">123</span>
            </p>
            <p>
              Hello <span className="block ">123</span>
            </p>
            <p>
              Hello <span className="block ">123</span>
            </p>
            <div className="lg:col-start-3 text-2xl">
              <button className="shadow-lg bg-green-400 shadow-green-500/50 px-4 py-1 mr-4">
                Buy
              </button>
              <button className="shadow-lg bg-red-500 shadow-red-500/50 px-4 py-1">
                Sell
              </button>
              <button
                onClick={onAddToFavHandler}
                className="shadow-lg bg-blue-500 shadow-blue-500/50 px-4 py-1"
              >
                Add to fav
              </button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default DetailedAssetCard;
