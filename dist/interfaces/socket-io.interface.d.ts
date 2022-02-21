/// <reference types="node" />
export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}
export interface ClientToServerEvents {
    connection: () => void;
}
export interface InterServerEvents {
    ping: () => void;
}
export interface SocketData {
    name: string;
    message: string;
    userId: string;
}