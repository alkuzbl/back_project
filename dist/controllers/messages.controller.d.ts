import { NextFunction, Request, Response } from 'express';
import MessagesService from '@services/messages.service';
declare class MessagesController {
    messagesService: MessagesService;
    deleteMessage: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createMessage: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default MessagesController;
