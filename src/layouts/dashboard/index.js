import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const DashboardLayout = () => {
  return (
    <Stack direction={"row"}>
      { /* Sidebar */ }
      <SideBar />
      {/* Outlet to render child routes */}
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
