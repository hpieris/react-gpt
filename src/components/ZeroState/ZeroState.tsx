import React from "react";
import { POWERED_BY } from "../../utils/constants";
import { thunder } from "../Icons";
const initialMessages = [
  {
    id: 1,
    type: "Examples",
    icon: thunder,
    messages: ["What's a good question to ask here?"],
  },
];

const ZeroState = ({
  setInput,
  inputRef,
}: {
  setInput: (value: string) => void;
  inputRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      className="initial_loader"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        overflow: "auto",
      }}
    >
      <h1 style={{ marginTop: "10vw", marginBottom: "5vh" }}>{POWERED_BY}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "58px",
          alignItems: "center",
        }}
      >
        {initialMessages.map(({ id, type, icon, messages }) => {
          if (type == "Examples") {
            return (
              <div
                key={id}
                style={{
                  width: "90%",
                  height: "90%",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {icon}
                <p style={{ fontSize: "18px", marginTop: "5px" }}>{type}</p>
                {messages.map((msg, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        backgroundColor: "#000",
                        color: "#FFFFFF",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "14px 12px",
                        lineHeight: "18px",
                        marginTop: "18px",
                        fontSize: "14px",
                        cursor: "pointer",
                        borderRadius: "5px",
                        transition: "all 0.1s ease-in-out",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#444";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "#000";
                      }}
                      onClick={() => {
                        setInput(msg);
                        if (inputRef.current) {
                          inputRef.current.innerText = msg;
                        }
                      }}
                    >
                      "{msg}"
                    </div>
                  );
                })}
              </div>
            );
          }

          return (
            <div
              key={id}
              className="col"
              style={{
                width: "90%",
                height: "90%",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {icon}
              <p style={{ fontSize: "18px", marginTop: "5px" }}>{type}</p>
              {messages.map((msg, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#000",
                      color: "#FFFFFF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "14px 12px",
                      lineHeight: "18px",
                      marginTop: "18px",
                      fontSize: "14px",
                      borderRadius: "5px",
                    }}
                  >
                    {msg}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ZeroState;
