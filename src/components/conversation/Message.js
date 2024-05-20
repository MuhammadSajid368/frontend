import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
    DocMessages,
    LinkMessage,
  MediaMessage,
  ReplyMessage,
  TextMesage,
  Timeline,
} from "./MessageType";

const Message = ({menu}) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              // Timeline
              return <Timeline el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  // img message
                  return <MediaMessage el={el} menu={menu} />;
                case "doc":
                  // doc message
                  return <DocMessages el={el} menu={menu} />
                case "link":
                  // link message
                  return <LinkMessage el={el} menu={menu} />
                case "reply":
                  // reply message
                  return <ReplyMessage el={el} menu={menu} />;

                default:
                  // text message
                  return <TextMesage el={el} menu={menu} />;
              }
              

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
