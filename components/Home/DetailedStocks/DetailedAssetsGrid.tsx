import DetailedAssetCard from "../../UI/DetailedAssetCard";
import { Asset, TransformedAssetsFromDb } from "../../../types/assetType";
import { AssetAction } from "../../../store/asset-slice";
interface props {
  assets: Asset[];
}
const DetailedAssetsGrid: React.FC<props> = (props) => {
  return (
    <div className=" h-full w-full grid grid-cols-1 grid-rows-3 gap-3">
      {props.assets.map((asset) => (
        <DetailedAssetCard isSearched={false} asset={asset} />
      ))}
    </div>
  );
};

export default DetailedAssetsGrid;
