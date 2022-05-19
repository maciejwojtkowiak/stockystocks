import { useSelector } from "react-redux";
import { RootState } from "../../../store/Store";

const CapitalTable = () => {
  const money = useSelector((state: RootState) => state.assets.balance);
  console.log(money);
  const boughtAssets = useSelector(
    (state: RootState) => state.assets.boughtAssets
  );

  return (
    <div className=" mt-16 grid grid-cols-capital-fill gap-2 mx-2 items-center">
      <p className="text-center text-center bg-green-300 p-2">
        Revenue <span className="block"></span>
      </p>
      <p className="text-center bg-green-300 p-2">
        Money earned <span className="block">1000</span>
      </p>
      <p
        className="text-center bg-green-300 p-2
      "
      >
        Money spent <span className="block">1000</span>
      </p>
    </div>
  );
};

export default CapitalTable;
