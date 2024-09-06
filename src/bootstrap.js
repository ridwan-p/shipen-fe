
import { ChartComponent } from "./components/Chart/ChartJs";
import { 
  BarController, 
  BarElement, 
  CategoryScale, 
  LinearScale, 
  Legend, 
  Colors, 
  LineController, 
  PointElement, 
  LineElement,
  DoughnutController,
  ArcElement,
  PieController,
  PolarAreaController,
  RadarController,
  RadialLinearScale
} from "chart.js";

ChartComponent.register([
  BarController, 
  LinearScale, 
  CategoryScale, 
  BarElement,
  Legend,
  Colors,
  LineController,
  PointElement,
  LineElement,
  DoughnutController,
  ArcElement,
  PieController,
  PolarAreaController,
  RadarController,
  RadialLinearScale
]);
