import React from "react";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import { CaretLeft } from "phosphor-react";
import { useDispatch } from "react-redux";
import { updateSidebarType } from "../redux/slices/appSlice";
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { DocMessages, LinkMessage } from "./conversation/MessageType";

const SharedMessages = () => {
  const [value, setValue] = React.useState(0);

  const theme = useTheme();
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* Header */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction={"row"}
            alignItems={"center"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(updateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>
        {/* Tabs */}
        <Tabs
  sx={{ px: 2, pt: 2 }}
  value={value}
  onChange={handleChange}
  centered
>
  <Tab label="Media" />
  <Tab label="Links" />
  <Tab label="Docs" />
</Tabs>

        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={value === 1 ? 1 : 3}
        >
          {/* Render content based on tab value */}
          {value === 0 && (
            <Grid container spacing={2}>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((el) => (
                <Grid item xs={4} key={el}>
                  <img src={faker.image.avatar()} alt={faker.name.fullName()} />
                </Grid>
              ))}
            </Grid>
          )}
          {value === 1 && SHARED_LINKS.map((el) => <LinkMessage el={el} />)}
          {value === 2 && SHARED_DOCS.map((el) => <DocMessages el={el} />)}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SharedMessages;
