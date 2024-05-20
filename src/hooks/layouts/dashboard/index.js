import { Stack } from "@mui/material";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const DashboardLayout = () => {
  const navigate = useNavigate()
  const {isAuthenticated} = useSelector((state) => state.auth )
  if (!isAuthenticated) {
    navigate("/auth/login")
  }
  return (
    <Stack direction={"row"}>
      {/* Sidebar */}
      <SideBar />
      {/* Outlet to render child routes */}
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
