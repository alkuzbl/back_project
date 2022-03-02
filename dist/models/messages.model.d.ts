/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
import { Document, Schema } from 'mongoose';
import { Message } from '@interfaces/messages.interface';
export declare const messageSchema: Schema;
declare const messageModel: import("mongoose").Model<Message & Document<any, any, any>, {}, {}, {}>;
export default messageModel;
