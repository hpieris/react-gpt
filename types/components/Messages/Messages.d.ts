import React from "react";
import { MessageType } from "../../types/types";
type MessagesProps = {
    messages: MessageType[];
};
export default function Messages({ messages }: MessagesProps): React.JSX.Element;
export {};
