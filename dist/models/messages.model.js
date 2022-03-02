"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageSchema = void 0;
const mongoose_1 = require("mongoose");
exports.messageSchema = new mongoose_1.Schema({
    message: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
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
const messageModel = (0, mongoose_1.model)('Message', exports.messageSchema);
exports.default = messageModel;
//# sourceMappingURL=messages.model.js.map