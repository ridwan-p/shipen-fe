import * as url from "../constants/url";
import ProofOfDeliveryPage from "../pages/Dashboards/ShippingManagement/ProofOfDeliveryPage";
import RateCalculationPage from "../pages/Dashboards/ShippingManagement/RateCalculationPage";
import ShipmentsPage from "../pages/Dashboards/ShippingManagement/ShipmentsPage";
import ShippingRequestPage from "../pages/Dashboards/ShippingManagement/ShippingRequestPage";

const routes = [
  {
    path: url.PROOF_OF_DELIVERY,
    element: <ProofOfDeliveryPage />
  },
  {
    path: url.RATE_CALCULATION,
    element: <RateCalculationPage />
  },
  {
    path: url.SHIPMENTS,
    element: <ShipmentsPage />
  },
  {
    path: url.SHIPPING_REQUESTS,
    element: <ShippingRequestPage />
  },
];

export default routes;