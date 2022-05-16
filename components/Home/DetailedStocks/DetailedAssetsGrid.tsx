import DetailedAssetCard from "../../UI/DetailedAssetCard";
import { AssetFromDb } from "../../../types/assetType";
interface props {
  mongoAssets: AssetFromDb;
}
const DetailedAssetsGrid: React.FC<props> = () => {
  return (
    <div className=" h-full w-full grid grid-cols-1 grid-rows-3 gap-3">
      <DetailedAssetCard isSearched={false} />
      <DetailedAssetCard isSearched={false} />
      <DetailedAssetCard isSearched={false} />
    </div>
  );
};

export default DetailedAssetsGrid;
