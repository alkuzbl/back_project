import { HttpException } from '@exceptions/HttpException';
import messageModel from '@models/messages.model';
import { Message } from '@interfaces/messages.interface';
import { isEmpty } from '@utils/util';

class MessagesService {
  public messages = messageModel;

  public async createMessage(messageData: any): Promise<any> {
    if (isEmpty(messageData)) throw new HttpException(400, "You're not messageData");
    const createUserData = await this.messages.create({ ...messageData });
    return createUserData;
  }

  public async deleteMessage(messageId: string): Promise<Message> {
    const deleteMessageById: any = await this.messages.findByIdAndDelete(messageId);
    if (!deleteMessageById) throw new HttpException(409, "You're not message");

    return deleteMessageById;
  }
}

export default MessagesService;
