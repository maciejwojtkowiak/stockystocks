import DetailedAssetCard from "../../UI/DetailedAssetCard";
import { Asset, TransformedAssetsFromDb } from "../../../types/assetType";
import { AssetAction } from "../../../store/asset-slice";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/Store";
interface props {
  assets: Asset[];
}
const DetailedAssetsGrid: React.FC<props> = (props) => {
  const assets = useSelector((state: RootState) => state.assets.fetchedAssets);
  return (
    <div className=" h-full w-full grid grid-cols-1 grid-rows-3 gap-3">
      {assets.map((asset, i) => (
        <DetailedAssetCard key={i} isSearched={false} asset={asset} />
      ))}
    </div>
  );
};

export default DetailedAssetsGrid;
