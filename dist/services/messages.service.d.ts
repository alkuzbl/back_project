/// <reference types="mongoose" />
import { Message } from '../interfaces/messages.interface';
declare class MessagesService {
    messages: import("mongoose").Model<Message & import("mongoose").Document<any, any, any>, {}, {}>;
    createMessage(messageData: any): Promise<any>;
    deleteMessage(messageId: string): Promise<Message>;
}
export default MessagesService;
