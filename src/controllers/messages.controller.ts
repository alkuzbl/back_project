import MessagesService from '@services/messages.service';

class SocketController {
  public messageService = new MessagesService();

  public createMessage = async (data: { message: string; userId: string }) => {
    try {
      const message = await this.messageService.createMessage({ ...data });

      return message;
    } catch (error) {}
  };

  public getMessages = async () => {
    try {
      const messages = await this.messageService.getMessages();

      return messages;
    } catch (error) {}
  };
}

export default SocketController;
