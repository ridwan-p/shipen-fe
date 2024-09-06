import { Chart } from "chart.js";
import { ChartComponent } from "../components/Chart/ChartJs";

export const createChartComponent = (type) => {
  const ChartComponentWrapper = (props) => <ChartComponent type={type} {...props} />;
  return ChartComponentWrapper;
};

export const register = Chart.register;