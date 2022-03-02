/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
import { Document, Schema } from 'mongoose';
import { User } from '@interfaces/users.interface';
export declare const userSchema: Schema;
declare const userModel: import("mongoose").Model<User & Document<any, any, any>, {}, {}, {}>;
export default userModel;
