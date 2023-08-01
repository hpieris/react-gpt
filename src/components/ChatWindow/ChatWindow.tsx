import React from "react";
import { MessageProvider } from "../../context/MessageContext";
import { StyleProvider } from "../../context/StyleContext";
import { ChatContainer } from "../ChatContainer";

export interface ChatWindowProps {
  bgColor?: string;
  userColor?: string;
  botColor?: string;
  userTextColor?: string;
  botTextColor?: string;
  inputTextColor?: string;
  inputBgColor?: string;
  config: {
    appId: string;
    authData: any;
  };
}

export const ChatWindow: React.FC<ChatWindowProps> = (props) => {
  return (
    <MessageProvider>
      <StyleProvider>
        <ChatContainer
          config={
            props.config || {
              appId: "trello",
              authData: {
                location: "query",
                auth: {
                  token: "bearer ",
                },
              },
            }
          }
          bgColor={props.bgColor}
          userColor={props.userColor}
          botColor={props.botColor}
          userTextColor={props.userTextColor}
          botTextColor={props.botTextColor}
          inputTextColor={props.inputTextColor}
          inputBgColor={props.inputBgColor}
        />
      </StyleProvider>
    </MessageProvider>
  );
};
