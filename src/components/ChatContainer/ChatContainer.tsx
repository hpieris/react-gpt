import React, { useContext } from "react";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import MessageInput from "../MessageInput";
import Messages from "../Messages";
import { MessageContext } from "../../context/MessageContext";
import { StyleContext } from "../../context/StyleContext";
import { MessageType } from "../../types/types";
import { ChatContainerProps } from "../../types/interfaces";
import { SOCKET_URL } from "../../utils/constants";

import {
  MainContainer,
  MessagesContainer,
  MessagesWrapper,
  ZeroStateContainer,
  MessageInputContainer,
} from "./styledComponents";

const room = uuidv4();
const socket = io(SOCKET_URL);
socket.emit("join", room);

export const ChatContainer: React.FC<ChatContainerProps> = (props) => {
  const [input, setInput] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const {
    chatActive,
    setChatActive,
    messages,
    setMessages,
    setBotMessages,
    disableinput,
    setDisableinput,
  } = useContext(MessageContext);

  const {
    bgColor,
    inputBgColor,
    setBgColor,
    setBotColor,
    setBotTextColor,
    setUserColor,
    setUserTextColor,
    setInputTextColor,
    setInputBgColor,
  } = useContext(StyleContext);

  useEffect(() => {
    setBgColor(props.bgColor || "");
    setBotColor(props.botColor || "");
    setBotTextColor(props.botTextColor || "");
    setUserColor(props.userColor || "");
    setUserTextColor(props.userTextColor || "");
    setInputTextColor(props.inputTextColor || "");
    setInputBgColor(props.inputBgColor || "");
  }, [props]);

  const inputRef = useRef<HTMLDivElement>(null);

  function addMessage(msg: MessageType) {
    console.log(`firing add message => ${JSON.stringify(msg)}`);

    if (msg.user) {
      setMessages((prev) => [...prev, msg]);
    } else {
      setMessages((prev) => [...prev, msg]);
    }

    console.log(`after adding => ${JSON.stringify(JSON.stringify(messages))}`);
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef.current, disableinput]);

  useEffect(() => {
    socket.on("response", (data: any) => {
      const result = data;
      const justText = result.replace(/\u001b\[[^A-Za-z]*[A-Za-z]/g, "");
      if (messages.length > 0) {
        setResponse((prev) => prev + justText);
        if (chatActive) {
          setBotMessages(response);
          setMessages((prev) => {
            console.log(`res ${justText}`);
            prev[prev.length - 1].message = justText;
            return [...prev];
          });
        }
      }

      if (result === "\n>") {
        console.log("message complete");
      }
    });

    socket.on("connection", () => {
      console.log("connected");
    });

    socket.on("end", () => {
      socket.emit("chatstart");
      setDisableinput(false);
      setChatActive(false);
    });

    return () => {
      socket.off("response");
      socket.off("end");
    };
  }, [messages]);

  const ask = (message: string) => {
    const senderID = uuidv4();
    const replyID = uuidv4();

    setResponse("");

    addMessage({
      message: message,
      user: true,
      id: senderID,
    });

    socket.emit("message", {
      message,
      room,
      appId: props.config.appId,
      authData: props.config.authData,
    });

    addMessage({
      message: "",
      user: false,
      id: replyID,
      replyId: senderID,
    });
  };

  return (
    <div>
      <MainContainer $bgColor={bgColor} style={{ fontFamily: "Nunito Sans" }}>
        {messages.length > 0 ? (
          <MessagesContainer>
            <MessagesWrapper>
              <Messages messages={messages} />
            </MessagesWrapper>
          </MessagesContainer>
        ) : (
          <ZeroStateContainer>
            {/*
            <ZeroStateWrapper>
              <ZeroState setInput={setInput} inputRef={inputRef} />
            </ZeroStateWrapper> 
            */}
          </ZeroStateContainer>
        )}

        <MessageInputContainer $bgColor={inputBgColor}>
          <MessageInput
            ask={ask}
            input={input}
            setInput={setInput}
            inputRef={inputRef}
            socket={socket}
          />
        </MessageInputContainer>
      </MainContainer>
    </div>
  );
};
