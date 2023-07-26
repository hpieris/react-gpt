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
    appId: "3de7fc08-d58f-4189-8ce2-70e02f3f7646",
    authData: { location: "query", auth: { key: "db9127a1d7a1b271fa66e759dfb20b34", token: "ATTA7c9c1a8fb9e0e7b433cb5bb0da0e1cf5fde56fd9bbae0a52b1f30b840d001f94721CD4A2" } },
  },
};
