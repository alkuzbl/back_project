import { Routes } from '@interfaces/routes.interface';
import MessagesController from '@controllers/messages.controller';
declare class MessagesRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    messagesController: MessagesController;
    constructor();
    private initializeRoutes;
}
export default MessagesRoute;
