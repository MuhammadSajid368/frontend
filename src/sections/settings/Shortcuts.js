import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Typography,
  Stack,
  Button,
  DialogActions,
} from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const chatShortcuts = [
  {
    key: 0,
    title: "Send Message",
    combination: ["Enter"],
  },
  {
    key: 1,
    title: "Start New Message",
    combination: ["Cmd", "N"],
  },
  {
    key: 2,
    title: "Reply to Message",
    combination: ["R"],
  },
  {
    key: 3,
    title: "Forward Message",
    combination: ["F"],
  },
  {
    key: 4,
    title: "Mark as Unread",
    combination: ["U"],
  },
  {
    key: 5,
    title: "Search Messages",
    combination: ["Cmd", "F"],
  },
  {
    key: 6,
    title: "Next Conversation",
    combination: ["Cmd", "Down Arrow"],
  },
  {
    key: 7,
    title: "Previous Conversation",
    combination: ["Cmd", "Up Arrow"],
  },
  {
    key: 8,
    title: "Attach File",
    combination: ["Cmd", "Shift", "A"],
  },
  {
    key: 9,
    title: "Toggle Emoji Picker",
    combination: [":", ")"],
  },
  {
    key: 10,
    title: "Toggle Bold Text",
    combination: ["Cmd", "B"],
  },
  {
    key: 11,
    title: "Toggle Italic Text",
    combination: ["Cmd", "I"],
  },
  {
    key: 12,
    title: "Toggle Underline Text",
    combination: ["Cmd", "U"],
  },
  {
    key: 13,
    title: "Select All Messages",
    combination: ["Cmd", "A"],
  },
  {
    key: 14,
    title: "Scroll Up",
    combination: ["Cmd", "Up Arrow"],
  },
  {
    key: 15,
    title: "Scroll Down",
    combination: ["Cmd", "Down Arrow"],
  },
  {
    key: 16,
    title: "Jump to First Unread Message",
    combination: ["Cmd", "Shift", "J"],
  },
  {
    key: 17,
    title: "Jump to Last Message",
    combination: ["Cmd", "Shift", "End"],
  },
  {
    key: 18,
    title: "Toggle Notifications",
    combination: ["Cmd", "Shift", "N"],
  },
  {
    key: 19,
    title: "Open Settings",
    combination: ["Cmd", ","],
  },
];

const Shortcuts = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        keepMounted
        sx={{ p: 4 }}
      >
        <DialogTitle>Keyboard Shortcuts</DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            {chatShortcuts.map(({ key, title, combination }) => (
              <Grid item container xs={6} key={key}>
                <Stack
                  width={"100%"}
                  justifyContent={"space-between"}
                  spacing={3}
                  direction={"row"}
                  alignItems="center"
                >
                  <Typography variant="caption" fontSize={14}>
                    {title}
                  </Typography>
                  <Stack spacing={2} direction={"row"}>
                    {combination.map((key, index) => (
                      <Button
                        disabled
                        variant="contained"
                        key={index}
                        sx={{ color: "#212121", width: "auto" }}
                      >
                        {key}
                      </Button>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Shortcuts;
