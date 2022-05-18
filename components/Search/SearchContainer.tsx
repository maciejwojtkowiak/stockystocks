import SearchForm from "./SearchForm";
import SearchCard from "./SearchCard";
import { useState } from "react";

import { Asset } from "../../types/assetType";

const SearchContainer = () => {
  const [detailedAsset, setDetailedAsset] = useState<Asset>();

  const setDetailedAssetHandler = (val: Asset) => {
    setDetailedAsset(val);
  };
  return (
    <div className="h-screen w-screen grid place-items-center ">
      <div
        className="h-3/4 w-1/2 bg-gray-100 drop-shadow-2xl

"
      >
        <SearchForm setAsset={setDetailedAssetHandler} />
        <SearchCard asset={detailedAsset!} />
      </div>
    </div>
  );
};

export default SearchContainer;
