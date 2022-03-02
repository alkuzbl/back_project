import { Document, model, Schema } from 'mongoose';
import { Message } from '@interfaces/messages.interface';
import { userSchema } from '@models/users.model';

export const messageSchema: Schema = new Schema({
  message: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  // room: {
  //   //type: roomSchema,
  // },
  messageStatus: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  updated: {
    type: Date,
    default: Date.now(),
  },
});

const messageModel = model<Message & Document>('Message', messageSchema);

export default messageModel;
