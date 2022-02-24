"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const messages_service_1 = (0, tslib_1.__importDefault)(require("@services/messages.service"));
class MessagesController {
    constructor() {
        this.messagesService = new messages_service_1.default();
        this.deleteMessage = async (req, res, next) => {
            try {
                const messageId = req.params.messageId;
                console.log(messageId);
                const deleteMessageData = await this.messagesService.deleteMessage(messageId);
                res.status(200).json({ data: deleteMessageData, message: 'deleted' });
            }
            catch (error) {
                next(error);
            }
        };
        this.createMessage = async (req, res, next) => {
            try {
                const messageData = req.body;
                const createMessageData = await this.messagesService.createMessage(messageData);
                res.status(201).json({ data: createMessageData, message: 'message created' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = MessagesController;
//# sourceMappingURL=messages.controller.js.map