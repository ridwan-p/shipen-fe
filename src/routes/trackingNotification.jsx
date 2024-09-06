import * as url from "../constants/url";
import NotificationPage from "../pages/Dashboards/TrackingNotification/NotificationPage";
import TrackingPage from "../pages/Dashboards/TrackingNotification/TrackingPage";

const routes = [
  {
    path: url.NOTIFICATIONS,
    element: <NotificationPage />
  },
  {
    path: url.TRACKING,
    element: <TrackingPage />
  },
];

export default routes;