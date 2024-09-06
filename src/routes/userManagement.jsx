import * as url from "../constants/url";
import UsersPage from "../pages/Dashboards/UserManagement/UsersPage";

const routes = [
  {
    path: url.USERS,
    element: <UsersPage />
  }
];

export default routes;