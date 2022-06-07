import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/Store";

const FinancialChart = () => {
  const historicalCapital = useSelector(
    (state: RootState) => state.assets.historicalCapital
  );

  const labels = ["January", "February", "March", "April", "May", "June"];
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
  );

  return (
    <div className="">
      <Line
        datasetIdKey="0"
        data={{
          labels: labels,
          datasets: [
            {
              label: "Your assets",
              backgroundColor: "rgb(0,100,0)",
              borderColor: "rgb(46,139,87)",
              data: historicalCapital,
              tension: 0.5,
            },
          ],
        }}
      />
    </div>
  );
};

export default FinancialChart;
