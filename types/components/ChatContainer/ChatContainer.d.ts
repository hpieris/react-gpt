import React from "react";
export interface ChatContainerProps {
    backgroundColor: string;
    config: {
        appName: string;
        authData: {
            location: string;
            auth: {
                key: string;
                token: string;
            };
        };
    };
}
export declare const ChatContainer: React.FC<ChatContainerProps>;
