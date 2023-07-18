import { styled } from "styled-components";

const Wrapper = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 50% !important;
  padding-bottom: 10px;
  bottom: 0;
`;

const InputBox = styled.div<{
  $bgColor: string | undefined;
  $borderRadius: string | undefined;
}>`
  width: 100%;
  background-color: ${(props) => props?.$bgColor || "#40414f"};
  border-radius: ${(props) => props?.$borderRadius || "7px"};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 5px;
  padding: 10px 5px;
  position: relative;
`;

const InputDiv = styled.input<{
  $inputTextColor: string;
  $inputBgColor: string;
}>`
  width: "97%",
  minHeight: 26,
  outline: "none",
  border: "none",
  color: ${(props) => props?.$inputTextColor || "white"},
  backgroundColor: ${(props) => props?.$inputBgColor || "#40414f"},
  paddingLeft: "8px",
  fontSize: "16px",
  bottom: 0,
  maxHeight: 150,
  overflowY: "auto",
  paddingRight: "30px",
`;

export { Wrapper, InputBox, InputDiv };
