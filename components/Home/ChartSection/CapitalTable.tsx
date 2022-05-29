import { useSelector } from "react-redux";
import { RootState } from "../../../store/Store";

const CapitalTable = () => {
  // zrob logike dla wydanych pieniedzy
  const money = +useSelector((state: RootState) => state.assets.balance);
  const boughtAssets = useSelector(
    (state: RootState) => state.assets.boughtAssets
  );

  const total = +boughtAssets.reduce(
    (acc, cur) => cur.asset.price_usd * cur.quantity,
    0
  );

  console.log(total);
  console.log(money);

  const totalBalance = (money + total).toFixed(2);

  return (
    <div className=" mt-16 grid grid-cols-capital-fill gap-2 mx-2 items-center">
      <p className="text-center text-center bg-green-300 p-2">
        Free Money <span className="block">{money.toFixed(2)}$</span>
      </p>
      <p className="text-center bg-green-300 p-2">
        Money in assets<span className="block">{total.toFixed(2)}$</span>
      </p>
      <p
        className="text-center bg-green-300 p-2
      "
      >
        Total capital <span className="block">{totalBalance}$</span>
      </p>
    </div>
  );
};

export default CapitalTable;
