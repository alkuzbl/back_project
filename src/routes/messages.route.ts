import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import MessagesController from '@controllers/messages.controller';

class MessagesRoute implements Routes {
  public path = '/messages';
  public router = Router();
  public messagesController = new MessagesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.delete(`${this.path}/:messageId`, this.messagesController.deleteMessage);
    this.router.post(`${this.path}`, this.messagesController.createMessage);
  }
}

export default MessagesRoute;
