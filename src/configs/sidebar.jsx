import * as url from "../constants/url";
import { TYPE_MENU } from "../constants/sidebar";

const data = [
  {
    type: TYPE_MENU,
    route: url.DASHBOARD,
    icon: <i className="bi bi-speedometer2"></i>,
    title: 'Dashboard'
  },
  {
    type: TYPE_MENU,
    route: url.USER_MANAGEMENT,
    icon: <i className="bi bi-person-circle"></i>,
    title: 'User Management',
    children: [
      {
        route: url.USERS,
        title: 'Users'
      }
    ]
  },
  {
    type: TYPE_MENU,
    route: url.SHIPPING_MANAGEMENT,
    icon: <i className="bi bi-car-front-fill"></i>,
    title: 'Shipping Management',
    children: [
      {
        route: url.SHIPPING_REQUESTS,
        title: 'Shipping Requests'
      },
      {
        route: url.SHIPMENTS,
        title: 'Shipments'
      },
      {
        route: url.RATE_CALCULATION,
        title: 'Rate Calculation'
      },
      {
        route: url.PROOF_OF_DELIVERY,
        title: 'Proof of Delivery'
      }
    ]
  },
  {
    type: TYPE_MENU,
    route: url.DRIVER_MANAGEMENT,
    icon: <i className="bi bi-person"></i>,
    title: 'Driver Management',
    children: [
      {
        route: url.DRIVERS,
        title: 'Drivers'
      },
      {
        route: url.DRIVER_ASSIGNMENTS,
        title: 'Driver Assignments'
      },
      {
        route: url.PERFORMENCE_REPORT,
        title: 'Performence Report'
      }
    ]
  },
  {
    type: TYPE_MENU,
    route: url.PAYMENT_MANAGEMENT,
    icon: <i className="bi bi-currency-dollar"></i>,
    title: 'Payment Management',
    children: [
      {
        route: url.PAYMENTS,
        title: 'Payments'
      },
      {
        route: url.INVOICES,
        title: 'Invoices'
      },
      {
        route: url.PAYMENT_GATEWAYS,
        title: 'Payment Gateways'
      }
    ]
  },
  {
    type: TYPE_MENU,
    route: url.TRACKING_NOTIFICATIONS,
    icon: <i className="bi bi-bell"></i>,
    title: 'Tracking & Notifications',
    children: [
      {
        route: url.TRACKING,
        title: 'Tracking'
      },
      {
        route: url.NOTIFICATIONS,
        title: 'Notifications'
      }
    ]
  },
  {
    type: TYPE_MENU,
    route: url.REPORTS_ANALYTICS,
    icon: <i className="bi bi-bar-chart-fill"></i>,
    title: 'Reports & Analytics',
    children: [
      {
        route: url.SHIPMENT_REPORT,
        title: 'Shipment Report'
      },
      {
        route: url.FINANCIAL_REPORT,
        title: 'Financial Report'
      },
      {
        route: url.USER_ACTIVITY,
        title: 'User Activity'
      }
    ]
  },
  {
    type: TYPE_MENU,
    route: url.CUSTOMER_FEEDBACK,
    icon: <i className="bi bi-chat-left-text"></i>,
    title: 'Customer Feedback'
  },
  {
    type: TYPE_MENU,
    route: url.SYSTEM_SETTINGS,
    icon: <i className="bi bi-gear-fill"></i>,
    title: 'System Settings',
    children: [
      {
        route: url.GENERAL_SETTINGS,
        title: 'General Settings'
      },
      {
        route: url.SHIPPING_SETTINGS,
        title: 'Shipping Settings'
      },
      {
        route: url.SECURITY_SETTINGS,
        title: 'Security Settings'
      },
      {
        route: url.API_SETTINGS,
        title: 'API Settings'
      }
    ]
  }

]

export default data;