import { styled } from "styled-components";

interface MessageContainerProps {
  $isUser: boolean;
  $userColor?: string;
  $botColor?: string;
  $userTextColor?: string;
  $botTextColor?: string;
}

const MessageContainer = styled.div<MessageContainerProps>`
  width: 100%;
  background-color: ${(props) =>
    props.$isUser
      ? props.$userColor || "transparent"
      : props.$botColor || "#444654"};
  color: ${(props) =>
    props.$isUser
      ? props.$userTextColor || "#444654"
      : props.$botTextColor || "white"};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px 0;
  border-radius: 0px;
  justify-content: center;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  align-self: center;
`;

const MessageIconBox = styled.div`
  width: 25px;
  margin-left: 15px;
  align-items: flex-start;
`;

const MessageTextBox = styled.div`
  margin-left: 50px;
  margin-right: 15px;
  font-size: 15px;
  line-height: 25px;
  width: 100%;
`;

export { MessageContainer, MessageWrapper, MessageIconBox, MessageTextBox };
