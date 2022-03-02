/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose" />
import { Message } from '@interfaces/messages.interface';
declare class MessagesService {
    messages: import("mongoose").Model<Message & import("mongoose").Document<any, any, any>, {}, {}, {}>;
    createMessage(messageData: Message): Promise<Message>;
    getMessages(): Promise<Message[]>;
    deleteMessage(messageId: string): Promise<Message>;
}
export default MessagesService;
