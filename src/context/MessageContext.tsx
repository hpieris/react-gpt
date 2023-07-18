import React, { createContext, useState } from "react";
import { MessageType } from "../types/types";

export interface MessageContextProps {
  chatActive: boolean;
  setChatActive: React.Dispatch<React.SetStateAction<boolean>>;
  toggleChatActive: () => void;
  messages: MessageType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
  disableinput: boolean;
  setDisableinput: React.Dispatch<React.SetStateAction<boolean>>;
  setBotMessages: React.Dispatch<React.SetStateAction<string>>;
  botMessages: string;
  stopChat: (message: string) => void;
}

const MessageContext = createContext<MessageContextProps>({
  chatActive: false,
  setChatActive: () => {},
  toggleChatActive: () => {},
  messages: [],
  setMessages: () => {},
  disableinput: false,
  setDisableinput: () => {},
  setBotMessages: () => {},
  botMessages: "",
  stopChat: () => {},
});

export const useMessageFetching = () => React.useContext(MessageContext);

const MessageProvider = ({ children }: { children: React.ReactNode }) => {
  const [chatActive, setChatActive] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [disableinput, setDisableinput] = useState(false);
  const [botMessages, setBotMessages] = useState("");

  const toggleChatActive = () => {
    setChatActive((prev) => !prev);
  };

  const stopChat = (socket: any) => {
    socket.emit("stopResponding");
    setChatActive(false);
    setDisableinput(false);

    setMessages((prev) => {
      prev[prev.length - 1].message = botMessages;
      return [...prev];
    });
  };

  const messageContextValue: MessageContextProps = {
    chatActive: chatActive,
    setChatActive: setChatActive,
    toggleChatActive: toggleChatActive,
    messages,
    setMessages,
    disableinput,
    setDisableinput,
    setBotMessages: setBotMessages,
    botMessages: botMessages,
    stopChat: stopChat,
  };

  return (
    <MessageContext.Provider value={messageContextValue}>
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
