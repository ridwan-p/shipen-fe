import { createBrowserRouter } from "react-router-dom";
import AppWrapper from "../sections/AppWrapper";
import ErrorPage from "../pages/Errors/ErrorPage";
// routes for the dashboard
import dashboardRoutes from "./dashboard";
import customerFeedback from "./customerFeedback";
import driverManagement from "./driverManagement";
import userManagement from "./userManagement";
import trackingNotification from "./trackingNotification";
import systemSettings from "./systemSettings";
import reportAnalytics from "./reportAnalytics";
import paymentManagement from "./paymentManagement";
import shippingManagement from "./shippingManagement";

const routes = [
  {
    path: "/",
    element: <AppWrapper />,
    errorElement: <ErrorPage />,
    children: [
      ...dashboardRoutes,
      ...customerFeedback,
      ...driverManagement,
      ...userManagement,
      ...trackingNotification,
      ...systemSettings,
      ...reportAnalytics,
      ...paymentManagement,
      ...shippingManagement,
    ]
  }
];

const Router = createBrowserRouter(routes);
export default Router;