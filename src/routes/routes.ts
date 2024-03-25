import { AdminPage } from "../admin/pages";

interface Route { 
  to: string;
  path: string;
  Component: () => JSX.Element; 
  name: string;
}


export const AdminRoutes:Route[] = [
  {
    to: "/",
    path: "",
    name: "Admin",
    Component: AdminPage
  }
]