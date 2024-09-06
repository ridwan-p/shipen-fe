import * as url from "../constants/url";
import DriversPage from "../pages/Dashboards/DriverManagement/DriversPage";
import DriverAssignmentsPage from "../pages/Dashboards/DriverManagement/DriverAssignmentsPage";
import PerformenceReportPage from "../pages/Dashboards/DriverManagement/PerformenceReportPage";

const routes = [
  {
    path: url.DRIVERS,
    element: <DriversPage />
  },
  {
    path: url.DRIVER_ASSIGNMENTS,
    element: <DriverAssignmentsPage />
  },
  {
    path: url.PERFORMENCE_REPORT,
    element: <PerformenceReportPage />
  }
];

export default routes;