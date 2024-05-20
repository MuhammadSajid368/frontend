import { Container, Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";
import { useSelector } from "react-redux";
const MainLayout = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (isAuthenticated === true) {
     navigate('/app')
  }
  return (
    <>
      <Container sx={{ mt: 5 }} maxWidth="sm">
        <Stack spacing={5}>
          <Stack sx={{ width: "100%" }} direction={"row"} alignItems={"center"}>
            <img style={{ height: 60, width: 70 }} alt="logo" src={Logo} />
          </Stack>
        </Stack>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
