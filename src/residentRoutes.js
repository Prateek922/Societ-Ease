import ResidentDashboard from "views/ResidentDashboard";
import residentBills from "views/residentBills";
import residentComplaints from "views/residentComplaints";
import residentMaintenance from "views/residentMaintenance";
import residentNotice from "views/residentNotice";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: ResidentDashboard,
    layout: "/resident"
  },
  {
    path: "/Bills",
    name: "View Bills",
    icon: "nc-icon nc-credit-card",
    component: residentBills,
    layout: "/resident"
  },
  {
    path: "/Notices",
    name: "View Notices",
    icon: "nc-icon nc-paper",
    component: residentNotice,
    layout: "/resident"
  },
  {
    path: "/Complaints",
    name: "Raise Complaints",
    icon: "nc-icon nc-chat-33",
    component: residentComplaints,
    layout: "/resident"
  },
  {
    path: "/Maintenance",
    name: "View Maintenance",
    icon: "nc-icon nc-settings",
    component: residentMaintenance,
    layout: "/resident"
  },
];
export default routes;
  