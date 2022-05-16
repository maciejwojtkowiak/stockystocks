import DetailedAssetCard from "../../UI/DetailedAssetCard";
import { TransformedAssetsFromDb } from "../../../types/assetType";
interface props {
  mongoAssets: TransformedAssetsFromDb[];
}
const DetailedAssetsGrid: React.FC<props> = (props) => {
  return (
    <div className=" h-full w-full grid grid-cols-1 grid-rows-3 gap-3">
      <DetailedAssetCard isSearched={false} mongoAssets={props.mongoAssets} />
      <DetailedAssetCard isSearched={false} />
      <DetailedAssetCard isSearched={false} />
    </div>
  );
};

export default DetailedAssetsGrid;
