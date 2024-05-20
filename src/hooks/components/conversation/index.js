import { Box, Stack } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Message from "./Message";

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat Header   */}

      <Header />

      {/* Msg */}
      <Box
        width={"100"}
        height={"100%"}
        overflow={"scroll"}
        sx={{ flexGrow: 1 }}
      >
        <Message menu={true} />
      </Box>
      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
