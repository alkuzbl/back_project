import { Document } from 'mongoose';
import { Message } from '../interfaces/messages.interface';
declare const messageModel: import("mongoose").Model<Message & Document<any, any, any>, {}, {}>;
export default messageModel;
