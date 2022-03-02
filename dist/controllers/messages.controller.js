"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const messages_service_1 = (0, tslib_1.__importDefault)(require("@services/messages.service"));
class SocketController {
    constructor() {
        this.messageService = new messages_service_1.default();
        this.createMessage = async (data) => {
            try {
                const message = await this.messageService.createMessage(Object.assign({}, data));
                return message;
            }
            catch (error) { }
        };
        this.getMessages = async () => {
            try {
                const messages = await this.messageService.getMessages();
                return messages;
            }
            catch (error) { }
        };
    }
}
exports.default = SocketController;
//# sourceMappingURL=messages.controller.js.map