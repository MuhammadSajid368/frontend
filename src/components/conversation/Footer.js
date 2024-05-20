import styled from "@emotion/styled/macro";
import {
  Box,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  useTheme,
} from "@mui/material";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import React, { useState } from "react";
import data from "@emoji-mart/data";
import { Picker } from "emoji-mart";
import EmojiPicker from "@emoji-mart/react";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));
const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 80,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 80,
    title: "Sticker",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 80,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 80,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 80,
    title: "Contact",
  },
];
const ChatInput = ({ setOpenPicker }) => {
  const [openActions, setOpenActions] = useState();
  return (
    <StyledInput
      fullWidth
      placeholder="Write a Message"
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            {Actions.map((el, index) => {
              return (
                <Stack
                  key={index}
                  sx={{
                    position: "relative",
                    display: openActions ? "inline-block" : "none",
                  }}
                >
                  <Tooltip title={el.title}>
                    <Fab
                      sx={{
                        position: "absolute",
                        top: -el.y * (index + 1),
                        backgroundColor: el.color,
                      }}
                    >
                      {el.icon}
                    </Fab>
                  </Tooltip>
                </Stack>
              );
            })}
            <InputAdornment>
              <IconButton
                onClick={() => {
                  setOpenActions((prev) => !prev);
                }}
              >
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={() => setOpenPicker((open) => !open)}>
              <Smiley style={{ marginBottom: "15px" }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
const Footer = () => {
  const theme = useTheme();
  const [openPicker, setOpenPicker] = useState(false);
  return (
    <Box
      p={2}
      sx={{
        height: 100,
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={3}>
        <Stack width={"100%"}>
          {/* ChatInput  */}
          <Box
            sx={{
              display: openPicker ? "inline" : "none",
              zIndex: 10,
              position: "fixed",
              bottom: 81,
              right: 100,
            }}
          >
            <EmojiPicker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>
          <ChatInput setOpenPicker={setOpenPicker} />
        </Stack>
        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
