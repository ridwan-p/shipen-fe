import * as url from "../constants/url";
import CustomerFeedbackPage from "../pages/Dashboards/CustomerFeedback/CustomerFeedbackPage";

const routes = [
  {
    path: url.CUSTOMER_FEEDBACK,
    element: <CustomerFeedbackPage />
  }
];

export default routes;