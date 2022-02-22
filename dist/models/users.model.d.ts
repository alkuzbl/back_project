/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
import { Document } from 'mongoose';
import { User } from '../interfaces/users.interface';
declare const userModel: import("mongoose").Model<User & Document<any, any, any>, {}, {}, {}>;
export default userModel;
