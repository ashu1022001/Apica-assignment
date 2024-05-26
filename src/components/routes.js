import Analytics from "./analytics/Analytics";
import Dashboard from "./Dashboard";

export const routes = [
  {
    path: "/",
    Component: <Dashboard />,
  },
  {
    path: "/analytics",
    Component: <Analytics />,
  },
];
