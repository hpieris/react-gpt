/// <reference types="react" />
export interface MessageInputProps {
    ask: (msg: string) => void;
    input: string;
    setInput: (value: string) => void;
    inputRef: React.RefObject<HTMLDivElement>;
    socket: any;
    backgroundColor?: string;
    borderRadius?: string;
}
