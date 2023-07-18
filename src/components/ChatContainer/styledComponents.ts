import { styled } from "styled-components";

const MainContainer = styled.div<{ $bgColor: string }>`
  width: 100%;
  margin: auto;
  height: 100vh;
  position: relative;
  overflow-y: hidden;
  background-color: ${(props) => props?.$bgColor || "#40414f"};
`;

const MessagesContainer = styled.div`
  height: 88%;
  overflow-y: scroll;
  width: 100%;
  justify-content: center;
  display: flex;
`;

const MessagesWrapper = styled.div`
  width: 100%;
  padding-top: 10px;
`;

const ZeroStateContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ZeroStateWrapper = styled.div`
  width: "100%";
`;

const MessageInputContainer = styled.div<{ $bgColor: string }>`
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${(props) => props?.$bgColor || "#40414f"};
`;

export {
  MainContainer,
  MessagesContainer,
  MessagesWrapper,
  ZeroStateContainer,
  ZeroStateWrapper,
  MessageInputContainer,
};
