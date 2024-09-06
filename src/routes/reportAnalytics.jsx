import * as url from "../constants/url";
import FinancialReportPage from "../pages/Dashboards/ReportAnalytics/FinancialReportPage";
import ShipmentReportPage from "../pages/Dashboards/ReportAnalytics/ShipmentReportPage";
import UserActivityPage from "../pages/Dashboards/ReportAnalytics/UserActivityPage";

const routes = [
  {
    path: url.FINANCIAL_REPORT,
    element: <FinancialReportPage />
  },
  {
    path: url.SHIPMENT_REPORT,
    element: <ShipmentReportPage />
  },
  {
    path: url.USER_ACTIVITY,
    element: <UserActivityPage />
  },
];

export default routes;