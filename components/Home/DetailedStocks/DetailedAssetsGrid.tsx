import DetailedAssetCard from "../../UI/DetailedAssetCard";
import { GetStaticProps } from "next";
import { getDataFromMongo } from "../../../helpers/getDataFromMongo";

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
