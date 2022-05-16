import { TransformedAssetsFromDb } from "../../types/assetType";
import { Fragment } from "react";

interface funcProps {
  mongoAssets: TransformedAssetsFromDb[];
}

const DetailedAssetCardData: React.FC<funcProps> = (props) => {
  const roundPrice = (price: number) => {
    return price.toFixed(2);
  };
  const numberToKkRepresentation = (price: number) => {
    return (price / 1000000).toFixed(2);
  };
  console.log(props.mongoAssets);
  return (
    <Fragment>
      <p>
        Name: <span className="block ">{props.mongoAssets[0].name}</span>
      </p>
      <p>
        Id:
        <span className="block ">{props.mongoAssets[0].asset_id}</span>
      </p>
      <p>
        Price:{" "}
        <span className="block ">
          {roundPrice(props.mongoAssets[0].price_usd)}$
        </span>
      </p>
      <p>
        1hrs volume{" "}
        <span className="block  ">
          {numberToKkRepresentation(props.mongoAssets[0].volume_1hrs_usd)}
          kk$
        </span>
      </p>
      <p>
        1 day volume{" "}
        <span className="block ">
          {numberToKkRepresentation(props.mongoAssets[0].volume_1day_usd)}
          kk$
        </span>
      </p>
      <p>
        1 mth volume{" "}
        <span className="block ">
          {numberToKkRepresentation(props.mongoAssets[0].volume_1mth_usd)}
          kk$
        </span>
      </p>
    </Fragment>
  );
};

export default DetailedAssetCardData;
