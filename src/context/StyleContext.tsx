import React, { createContext, useState, ReactNode } from "react";

interface StyleContextProps {
  bgColor: string;
  userColor: string;
  userTextColor: string;
  botColor: string;
  botTextColor: string;
  inputTextColor: string;
  inputBgColor: string;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  setUserColor: React.Dispatch<React.SetStateAction<string>>;
  setUserTextColor: React.Dispatch<React.SetStateAction<string>>;
  setBotColor: React.Dispatch<React.SetStateAction<string>>;
  setBotTextColor: React.Dispatch<React.SetStateAction<string>>;
  setInputTextColor: React.Dispatch<React.SetStateAction<string>>;
  setInputBgColor: React.Dispatch<React.SetStateAction<string>>;
}

const StyleContext = createContext<StyleContextProps>({
  bgColor: "",
  userColor: "",
  userTextColor: "",
  botColor: "",
  botTextColor: "",
  inputTextColor: "",
  inputBgColor: "",
  setBgColor: () => {},
  setUserColor: () => {},
  setUserTextColor: () => {},
  setBotColor: () => {},
  setBotTextColor: () => {},
  setInputTextColor: () => {},
  setInputBgColor: () => {},
});

interface StyleProviderProps {
  children: ReactNode;
}

const StyleProvider: React.FC<StyleProviderProps> = ({ children }) => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [userColor, setUserColor] = useState("#ffffff");
  const [userTextColor, setUserTextColor] = useState("#e4e4e4");
  const [botColor, setBotColor] = useState("#dbdbdb");
  const [botTextColor, setBotTextColor] = useState("#000000");
  const [inputTextColor, setInputTextColor] = useState("#000000");
  const [inputBgColor, setInputBgColor] = useState("#ffffff");

  const contextValue: StyleContextProps = {
    bgColor,
    userColor,
    userTextColor,
    botColor,
    botTextColor,
    inputTextColor,
    inputBgColor,
    setBgColor,
    setUserColor,
    setUserTextColor,
    setBotColor,
    setBotTextColor,
    setInputBgColor,
    setInputTextColor,
  };

  return (
    <StyleContext.Provider value={contextValue}>
      {children}
    </StyleContext.Provider>
  );
};

export { StyleContext, StyleProvider };
