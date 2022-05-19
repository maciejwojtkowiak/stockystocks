import { useSelector } from "react-redux";
import { RootState } from "../../../store/Store";

const CapitalTable = () => {
  // zrob logike dla wydanych pieniedzy
  const money = useSelector((state: RootState) => state.assets.balance);
  const boughtAssets = useSelector(
    (state: RootState) => state.assets.boughtAssets
  );

  const totalBalance =
    money +
    boughtAssets.reduce(
      (acc, cur) => (acc + cur.asset.price_usd) * cur.quantity,
      0
    );

  return (
    <div className=" mt-16 grid grid-cols-capital-fill gap-2 mx-2 items-center">
      <p className="text-center text-center bg-green-300 p-2">
        Revenue <span className="block">{money}</span>
      </p>
      <p className="text-center bg-green-300 p-2">
        Money earned <span className="block">{+totalBalance - +money}</span>
      </p>
      <p
        className="text-center bg-green-300 p-2
      "
      >
        Money spent <span className="block">{totalBalance}</span>
      </p>
    </div>
  );
};

export default CapitalTable;
