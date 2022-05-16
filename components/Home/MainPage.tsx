import CapitalTable from "./ChartSection/CapitalTable";
import FinancialChart from "./ChartSection/FinancialChart";
import DetailedAssetsGrid from "./DetailedStocks/DetailedAssetsGrid";
import Profile from "./Profile/Profile";
import { TransformedAssetsFromDb } from "../../types/assetType";
import { useDispatch, useSelector } from "react-redux";
import { AssetAction } from "../../store/asset-slice";
import { RootState } from "../../store/Store";
interface props {
  mongoAssets: TransformedAssetsFromDb[];
}
const MainPage: React.FC<props> = (props) => {
  const dispatch = useDispatch();
  const message = useSelector((state: RootState) => state.assets.message);
  console.log(message);
  dispatch(AssetAction.setMessage("Siema"));
  return (
    <div className="h-screen  grid place-items-center relative bg-gray-100 ">
      <h1 className="top-5 left-5 text-3xl absolute">Stocky Stocks</h1>
      <div className="grid h-5/6 w-4/6 bg-white  gap-4 p-4 grid-cols-5 grid-rows-5  drop-shadow-2xl rounded-md   ">
        <div className="bg-gray-100 row-span-2 col-span-2 shadow-xl rounded-lg">
          <Profile />
        </div>
        <div className=" row-span-5 col-span-3 shadow-xl rounded-lg">
          <DetailedAssetsGrid mongoAssets={props.mongoAssets} />
        </div>
        <div className=" bg-white row-span-3 col-span-2 shadow-xl rounded-lg">
          <FinancialChart />
          <CapitalTable />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
