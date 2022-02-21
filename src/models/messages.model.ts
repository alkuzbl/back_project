import { model, Schema, Document } from 'mongoose';
import { Message } from '@interfaces/messages.interface';

const messageSchema: Schema = new Schema({
  message: {
    type: String,
    required: true,
  },
});

const messageModel = model<Message & Document>('Message', messageSchema);

export default messageModel;
