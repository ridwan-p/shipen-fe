import * as url from "../../constants/url";
import ChartPage from "../../pages/Dashboards/ChartPage";
import baseRoutes from "./base";

const routes = [
  ...baseRoutes,
  {
    path: url.BUTTONS,
    element: <p>Buttons</p>
  },
  {
    path: url.CHARTS,
    element: <ChartPage />
  },
  {
    path: url.FORMS,
    element: <p>Forms</p>
  },
  {
    path: url.ICONS,
    element: <p>Icons</p>
  },
  {
    path: url.NOTIFICATIONS,
    element: <p>Notifications</p>
  }
];

export default routes;
