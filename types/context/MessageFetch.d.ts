import React from "react";
import { MessageType } from "../types/types";
export interface MessageFetch {
    messageFetching: boolean;
    setMessageFetching: React.Dispatch<React.SetStateAction<boolean>>;
    toggleMessageFetching: () => void;
    messages: MessageType[];
    setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
    disableinput: boolean;
    setDisableinput: React.Dispatch<React.SetStateAction<boolean>>;
    setFetchedMessages: React.Dispatch<React.SetStateAction<string>>;
    fetchedMessages: string;
    stopFetching: (message: string) => void;
}
export declare const MessageFetchContext: React.Context<MessageFetch>;
export declare const useMessageFetching: () => MessageFetch;
declare const MessageFetchProvider: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element;
export default MessageFetchProvider;
