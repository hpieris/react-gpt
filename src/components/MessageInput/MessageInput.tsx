import React, { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { MessageInputProps } from "./MessageInput.types";
import { InputBox, Wrapper } from "./styledComponents";
import { StyleContext } from "../../context/StyleContext";
import { Footer } from "../Footer";

const MessageInput: React.FC<MessageInputProps> = (props) => {
  const { inputBgColor, inputTextColor } = useContext(StyleContext);
  const { chatActive, setChatActive, disableinput, setDisableinput, stopChat } =
    useContext(MessageContext);

  const { ask, input, setInput, inputRef, socket, borderRadius } = props;

  function handleSubmit() {
    setDisableinput(true);
    setChatActive(true);
    if (input == "") return;
    ask(input);
    setInput("");
    if (inputRef.current) {
      inputRef.current.innerText = "";
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter" && !e.shiftKey && !chatActive) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
      <Wrapper>
        <InputBox $bgColor={inputBgColor} $borderRadius={borderRadius}>
          <div
            ref={inputRef}
            style={{
              width: "100%",
              color: inputTextColor || "white",
              backgroundColor: inputBgColor || "#40414f",
              paddingLeft: "8px",
              overflowY: "auto",
              paddingRight: "30px",
              minHeight: "1.2em",
              outline: "none",
              border: "none",
              bottom: "0px",
            }}
            contentEditable={!disableinput}
            onInput={(e) => {
              setInput(e.currentTarget.innerText);
            }}
            onKeyDownCapture={(e: React.KeyboardEvent<HTMLInputElement>) => {
              onKeyDown(e);
            }}
          />

          {disableinput ? (
            <div></div>
          ) : (
            <>
              <button
                onClick={() => {
                  handleSubmit();
                }}
                style={{
                  backgroundColor: "transparent",
                  outline: "none",
                  border: "none",
                  color: "#F9F9F9",
                  cursor: "pointer",
                  padding: "5px",
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "30px",
                  height: "30px",
                  right: "0px",
                  marginRight: "5px",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <PaperAirplaneIcon style={{ width: "20px", height: "20px" }} />
              </button>
            </>
          )}
        </InputBox>
        <Footer />
      </Wrapper>

      {chatActive && (
        <button
          onClick={() => {
            stopChat(socket);
          }}
          style={{
            position: "absolute",
            paddingLeft: "10px",
            paddingRight: "10px",
            bottom: "15vh",
            height: "45px",
            borderWidth: "1px",
            borderColor: inputBgColor,
            borderStyle: "solid",
            color: inputBgColor,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "3px",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = inputBgColor;
            e.currentTarget.style.color = inputTextColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = inputBgColor;
            e.currentTarget.style.borderColor = inputBgColor;
          }}
        >
          Stop Processing
        </button>
      )}
    </>
  );
};

export default MessageInput;
