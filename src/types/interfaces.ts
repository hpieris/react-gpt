export interface ChatContainerProps {
  bgColor?: string;
  userColor?: string;
  botColor?: string;
  userTextColor?: string;
  botTextColor?: string;
  inputTextColor?: string;
  inputBgColor?: string;
  config: {
    appId: string;
    authData: { location: string; auth: { key: string; token: string } };
  };
}
