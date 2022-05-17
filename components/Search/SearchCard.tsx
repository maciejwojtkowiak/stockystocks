import DetailedAssetCard from "../UI/DetailedAssetCard";
import { Asset } from "../../types/assetType";

interface funcProps {
  asset: Asset;
}

const SearchCard: React.FC<funcProps> = (props) => {
  return (
    <div className=" border h-1/2 mt-16 bg-red-100 rounded-lg m-4  ">
      <DetailedAssetCard isSearched={true} asset={props.asset} />
    </div>
  );
};

export default SearchCard;
