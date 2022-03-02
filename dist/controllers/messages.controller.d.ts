import MessagesService from '@services/messages.service';
declare class SocketController {
    messageService: MessagesService;
    createMessage: (data: {
        message: string;
        userId: string;
    }) => Promise<import("../interfaces/messages.interface").Message>;
    getMessages: () => Promise<import("../interfaces/messages.interface").Message[]>;
}
export default SocketController;
