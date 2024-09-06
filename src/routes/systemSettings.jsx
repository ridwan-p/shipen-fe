import * as url from "../constants/url";
import APISettingsPage from "../pages/Dashboards/SystemSettings/APISettingsPage";
import GeneralSettingsPage from "../pages/Dashboards/SystemSettings/GeneralSettingsPage";
import SecuritySettingsPage from "../pages/Dashboards/SystemSettings/SecuritySettingsPage";
import ShippingSettingsPage from "../pages/Dashboards/SystemSettings/ShippingSettingsPage";

const routes = [
  {
    path: url.API_SETTINGS,
    element: <APISettingsPage />
  },
  {
    path: url.GENERAL_SETTINGS,
    element: <GeneralSettingsPage />
  },
  {
    path: url.SECURITY_SETTINGS,
    element: <SecuritySettingsPage />
  },
  {
    path: url.SHIPPING_SETTINGS,
    element: <ShippingSettingsPage />
  },
];

export default routes;