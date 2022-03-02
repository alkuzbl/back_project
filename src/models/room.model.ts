import { Document, model, Schema } from 'mongoose';
import { Room } from '@interfaces/room.interface';
import { userSchema } from '@models/users.model';
import { messageSchema } from '@models/messages.model';

export const roomSchema: Schema = new Schema({
  name: {
    type: String,
    lowercase: true,
    unique: true,
  },
  topic: {
    type: String,
  },
  users: {
    type: [userSchema],
  },
  messages: {
    type: [messageSchema],
  },
  created: {
    type: Date,
  },
  updated: {
    type: Date,
    default: Date.now(),
  },
});

const roomModel = model<Room & Document>('Room', roomSchema);

export default roomModel;
