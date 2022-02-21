import { NextFunction, Request, Response } from 'express';
import { Message } from '@interfaces/messages.interface';
import MessagesService from '@services/messages.service';

class MessagesController {
  public messagesService = new MessagesService();

  public deleteMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const messageId: string = req.params.messageId;
      console.log(messageId);
      const deleteMessageData: Message = await this.messagesService.deleteMessage(messageId);

      res.status(200).json({ data: deleteMessageData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
  public createMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const messageData: any = req.body;
      const createMessageData: any = await this.messagesService.createMessage(messageData);
      res.status(201).json({ data: createMessageData, message: 'message created' });
    } catch (error) {
      next(error);
    }
  };
}

export default MessagesController;
