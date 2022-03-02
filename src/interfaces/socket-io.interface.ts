import { User } from '@interfaces/users.interface';
import { Message } from '@interfaces/messages.interface';

export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  connection: (data: { message: string }) => void;
  ['sent message']: (messages: Message[]) => void;
}

export interface ClientToServerEvents {
  connection: (socket: any, message: string) => void;
  ['sent message']: (data: { message: string; user: User }) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  message: string;
  userId: string;
}
