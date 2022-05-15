import DetailedAssetCard from "../../UI/DetailedAssetCard";

const DetailedAssetsGrid = () => {
  return (
    <div className=" h-full w-full grid grid-cols-1 grid-rows-3 gap-3">
      <DetailedAssetCard />
      <DetailedAssetCard />
      <DetailedAssetCard />
    </div>
  );
};

export default DetailedAssetsGrid;
