"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = require("@exceptions/HttpException");
const messages_model_1 = (0, tslib_1.__importDefault)(require("@models/messages.model"));
const util_1 = require("@utils/util");
class MessagesService {
    constructor() {
        this.messages = messages_model_1.default;
    }
    async createMessage(messageData) {
        if ((0, util_1.isEmpty)(messageData))
            throw new HttpException_1.HttpException(400, "You're not messageData");
        const createUserData = await this.messages.create(Object.assign({}, messageData));
        return createUserData;
    }
    async deleteMessage(messageId) {
        const deleteMessageById = await this.messages.findByIdAndDelete(messageId);
        if (!deleteMessageById)
            throw new HttpException_1.HttpException(409, "You're not message");
        return deleteMessageById;
    }
}
exports.default = MessagesService;
//# sourceMappingURL=messages.service.js.map