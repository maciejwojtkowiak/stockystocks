import DetailedAssetCard from "../../UI/DetailedAssetCard";
import { Asset, TransformedAssetsFromDb } from "../../../types/assetType";
interface props {
  asset: Asset[];
}
const DetailedAssetsGrid: React.FC<props> = (props) => {
  return (
    <div className=" h-full w-full grid grid-cols-1 grid-rows-3 gap-3">
      <DetailedAssetCard isSearched={false} asset={props.asset} />
      <DetailedAssetCard isSearched={false} asset={props.asset} />
      <DetailedAssetCard isSearched={false} asset={props.asset} />
    </div>
  );
};

export default DetailedAssetsGrid;
