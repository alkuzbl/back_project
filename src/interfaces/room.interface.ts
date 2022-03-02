import { User } from '@interfaces/users.interface';
import { Message } from '@interfaces/messages.interface';

export interface Room {
  name: string;
  topic: string;
  users: User[];
  messages: Message[];
  created: Date;
  updated: Date;
}
