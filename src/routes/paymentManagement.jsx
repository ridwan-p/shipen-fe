import * as url from "../constants/url";
import InvoicesPage from "../pages/Dashboards/PaymentManagement/InvoicesPage";
import PaymentGatewaysPage from "../pages/Dashboards/PaymentManagement/PaymentGatewaysPage";
import PaymentsPage from "../pages/Dashboards/PaymentManagement/PaymentsPage";

const routes = [
  {
    path: url.INVOICES,
    element: <InvoicesPage />
  },
  {
    path: url.PAYMENT_GATEWAYS,
    element: <PaymentGatewaysPage />
  },
  {
    path: url.PAYMENTS,
    element: <PaymentsPage />
  },
];

export default routes;