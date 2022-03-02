import { Document, model, Schema } from 'mongoose';
import { User } from '@interfaces/users.interface';

export const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
