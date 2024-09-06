import * as url from "../../constants/url";
import AccordionPage from "../../pages/Dashboards/Base/AccordionPage";

const routes = [
  {
    path: url.ACCORDION,
    element: <AccordionPage />
  },
  {
    path: url.ALERTS,
    element: <p>Alerts</p>
  },
  {
    path: url.BREADCRUMB,
    element: <p>Breadcrumb</p>
  },
  {
    path: url.BUTTONS,
    element: <p>Buttons</p>
  },
  {
    path: url.CARDS,
    element: <p>Cards</p>
  },
  {
    path: url.CAROUSEL,
    element: <p>Carousel</p>
  },
  {
    path: url.COLLAPSE,
    element: <p>Collapse</p>
  },
  {
    path: url.LIST_GROUP,
    element: <p>List Group</p>
  },
  {
    path: url.MODALS,
    element: <p>Modals</p>
  },
  {
    path: url.NAVS,
    element: <p>Navs</p>
  },
  {
    path: url.PAGINATION,
    element: <p>Pagination</p>
  }
];

export default routes;
