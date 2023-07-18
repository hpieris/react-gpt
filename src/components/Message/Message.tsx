import React, { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";
import { StyleContext } from "../../context/StyleContext";
import { MessageType } from "../../types/types";
import {
  MessageContainer,
  MessageIconBox,
  MessageTextBox,
  MessageWrapper,
} from "./styledComponents";
import {
  ChatBubbleBottomCenterTextIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

const Reply = ({ message, id }: { message: string; id: string }) => {
  const { chatActive, messages } = useContext(MessageContext);

  const trimmedMessage = message.slice(0);

  return (
    <div>
      {!chatActive && messages[messages.length - 1].id === id && (
        <div
          dangerouslySetInnerHTML={{ __html: trimmedMessage }}
          style={{
            whiteSpace: "pre-wrap",
          }}
        />
      )}

      {messages[messages.length - 1].id !== id && (
        <div
          dangerouslySetInnerHTML={{ __html: trimmedMessage }}
          style={{
            whiteSpace: "pre-wrap",
          }}
        />
      )}
      {chatActive && messages[messages.length - 1].id === id && (
        <p>
          {trimmedMessage}
          <span
            className={`cursor`}
            style={{
              marginLeft: "5px",
            }}
          >
            ...
          </span>
        </p>
      )}
    </div>
  );
};

const Message: React.FC<MessageType> = (props) => {
  const { userColor, botColor, userTextColor, botTextColor } =
    useContext(StyleContext);

  return (
    <MessageContainer
      $isUser={props.user}
      $userColor={userColor}
      $botColor={botColor}
      $userTextColor={userTextColor}
      $botTextColor={botTextColor}
    >
      <MessageWrapper>
        <MessageIconBox>
          <div
            style={{
              fontSize: "16px",
              backgroundColor: props.user ? "#5757db" : "#40414f",
              padding: "10px",
              color: "white",
              width: "1.4em",
              borderRadius: "5px",
            }}
          >
            {props.user ? <ChatBubbleBottomCenterTextIcon /> : <BoltIcon />}
          </div>
        </MessageIconBox>
        <MessageTextBox>
          {props.user ? (
            (props.message || "").trim()
          ) : (
            <Reply message={props.message} id={props.id} />
          )}
        </MessageTextBox>
      </MessageWrapper>
    </MessageContainer>
  );
};

export default Message;
