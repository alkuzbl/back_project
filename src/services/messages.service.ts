import { HttpException } from '@exceptions/HttpException';
import messageModel from '@models/messages.model';
import { Message } from '@interfaces/messages.interface';
import { isEmpty } from '@utils/util';

class MessagesService {
  public messages = messageModel;

  public async createMessage(messageData: Message): Promise<Message> {
    if (isEmpty(messageData)) throw new HttpException(400, "You're not messageData");
    const userData = { message: messageData.message, user: messageData.userId };
    const createMessageData = await this.messages.create({ ...userData });
    return createMessageData;
  }

  public async getMessages(): Promise<Message[]> {
    const createMessageData = await this.messages.find({}).populate('user');
    console.log(createMessageData);
    return createMessageData;
  }

  public async deleteMessage(messageId: string): Promise<Message> {
    const deleteMessageById: any = await this.messages.findByIdAndDelete(messageId);
    if (!deleteMessageById) throw new HttpException(409, "You're not message");

    return deleteMessageById;
  }
}

export default MessagesService;
