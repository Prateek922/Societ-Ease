import ResidentDashboard from "views/ResidentDashboard";
import residentBills from "views/residentBills";
import ResidentComplaints from "views/ResidentComplaints";
import ResidentMaintenance from "views/ResidentMaintenance";
import ResidentNotice from "views/ResidentNotice";

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
    component: ResidentNotice,
    layout: "/resident"
  },
  {
    path: "/Complaints",
    name: "Raise Complaints",
    icon: "nc-icon nc-chat-33",
    component: ResidentComplaints,
    layout: "/resident"
  },
  {
    path: "/Maintenance",
    name: "View Maintenance",
    icon: "nc-icon nc-settings",
    component: ResidentMaintenance,
    layout: "/resident"
  },
];
export default routes;
  