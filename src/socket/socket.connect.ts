import { Server } from 'socket.io';
import SocketController from '@controllers/messages.controller';

// придумать имя класса
export class SocketServer {
  private io: Server;
  private socketController = new SocketController();

  constructor(server) {
    this.io = server;
    this.initializeSocketConnect();
  }

  private initializeSocketConnect() {
    this.io.on('connection', async socket => {
      console.log(`a user connected`);
      socket.emit('connection', { message: 'Приветствуем Вас в нашем чате!!!' });
      const messages = await this.socketController.getMessages();

      this.io.emit('sent message', messages);

      socket.on('sent message', async data => {
        await this.socketController.createMessage({ message: data.message, userId: data.user._id });
        const messages = await this.socketController.getMessages();

        this.io.emit('sent message', messages);
      });

      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });
  }
}
