import React from "react";

export const Footer: React.FC = () => {
  return (
    <>
      <p
        style={{
          fontSize: "14px",
          textAlign: "center",
          marginTop: "19px",
          color: "#525252",
          maxWidth: "90%",
        }}
      >
        Powered by{" "}
        <a
          href="https://www.xprompt.ai/"
          target="_blank"
          style={{ color: "#525252" }}
        >
          xprompt.ai
        </a>
      </p>
    </>
  );
};
