import { Fragment } from "react";
import { Asset } from "../../types/assetType";

interface funcProps {
  asset: Asset;
}

const DetailedAssetCardData: React.FC<funcProps> = (props) => {
  const roundPrice = (price: number) => {
    return price.toFixed(2);
  };
  const numberToKkRepresentation = (price: number) => {
    return (price / 1000000).toFixed(2);
  };

  return (
    <Fragment>
      <p>
        Name: <span className="block ">{props.asset.name}</span>
      </p>
      <p>
        Id:
        <span className="block ">{props.asset.asset_id}</span>
      </p>
      <p>
        Price:{" "}
        <span className="block ">{roundPrice(props.asset.price_usd)}$</span>
      </p>
      <p>
        1hrs volume{" "}
        <span className="block  ">
          {numberToKkRepresentation(props.asset.volume_1hrs_usd)}
          kk$
        </span>
      </p>
      <p>
        1 day volume{" "}
        <span className="block ">
          {numberToKkRepresentation(props.asset.volume_1day_usd)}
          kk$
        </span>
      </p>
      <p>
        1 mth volume{" "}
        <span className="block ">
          {numberToKkRepresentation(props.asset.volume_1mth_usd)}
          kk$
        </span>
      </p>
    </Fragment>
  );
};

export default DetailedAssetCardData;
