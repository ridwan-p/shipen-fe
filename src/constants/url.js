export const HOME = '/';
export const DASHBOARD = '/dashboard';

// User Management
export const USER_MANAGEMENT = '/user-management';
export const USERS = `${USER_MANAGEMENT}/users`;

// Shipping Management
export const SHIPPING_MANAGEMENT = '/shipping-management';
export const SHIPPING_REQUESTS = `${SHIPPING_MANAGEMENT}/shipping-requests`;
export const SHIPMENTS = `${SHIPPING_MANAGEMENT}/shipments`;
export const RATE_CALCULATION = `${SHIPPING_MANAGEMENT}/rate-calculation`;
export const PROOF_OF_DELIVERY = `${SHIPPING_MANAGEMENT}/proof-of-delivery`;

// Driver Management
export const DRIVER_MANAGEMENT = '/driver-management';
export const DRIVERS = `${DRIVER_MANAGEMENT}/drivers`;
export const DRIVER_ASSIGNMENTS = `${DRIVER_MANAGEMENT}/driver-assignments`;
export const PERFORMENCE_REPORT = `${DRIVER_MANAGEMENT}/performence-report`;

// Payment Management
export const PAYMENT_MANAGEMENT = '/payment-management';
export const PAYMENTS = `${PAYMENT_MANAGEMENT}/payments`;
export const INVOICES = `${PAYMENT_MANAGEMENT}/invoices`; 
export const PAYMENT_GATEWAYS = `${PAYMENT_MANAGEMENT}/payment-gateways`;

// Tracking & Notifications
export const TRACKING_NOTIFICATIONS = '/tracking-notifications';
export const TRACKING = `${TRACKING_NOTIFICATIONS}/tracking`;
export const NOTIFICATIONS = `${TRACKING_NOTIFICATIONS}/notifications`;

// Reports & Analytics
export const REPORTS_ANALYTICS = '/reports-analytics';
export const SHIPMENT_REPORT = `${REPORTS_ANALYTICS}/shipment-report`;
export const FINANCIAL_REPORT = `${REPORTS_ANALYTICS}/financial-report`;
export const USER_ACTIVITY = `${REPORTS_ANALYTICS}/user-activity`;

// Customer Feedback
export const CUSTOMER_FEEDBACK = '/customer-feedback';

// System Settings
export const SYSTEM_SETTINGS = '/system-settings';
export const GENERAL_SETTINGS = `${SYSTEM_SETTINGS}/general-settings`;
export const SHIPPING_SETTINGS = `${SYSTEM_SETTINGS}/shipping-settings`;
export const SECURITY_SETTINGS = `${SYSTEM_SETTINGS}/security-settings`;
export const API_SETTINGS = `${SYSTEM_SETTINGS}/api-settings`;