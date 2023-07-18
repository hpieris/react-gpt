import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ChatWindow } from "./ChatWindow";

const meta: Meta<typeof ChatWindow> = {
  component: ChatWindow,
  title: "xPrompt/ChatWindow",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ChatWindow>;

export const ZeroState: Story = (args: any) => (
  <ChatWindow data-testId="InputField-id" {...args} />
);
ZeroState.args = {
  bgColor: "#e4e4e4",
  userColor: "#e4e4e4",
  userTextColor: "#000000",
  botColor: "#dbdbdb",
  botTextColor: "#000000",
  inputTextColor: "#C9C9C9",
  inputBgColor: "#222222",
  config: {
    appName: "trello",
    authData: { location: "query", auth: { key: "key", token: "token" } },
  },
};
