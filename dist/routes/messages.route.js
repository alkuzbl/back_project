"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const messages_controller_1 = (0, tslib_1.__importDefault)(require("../controllers/messages.controller"));
class MessagesRoute {
    constructor() {
        this.path = '/messages';
        this.router = (0, express_1.Router)();
        this.messagesController = new messages_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.delete(`${this.path}/:messageId`, this.messagesController.deleteMessage);
        this.router.post(`${this.path}`, this.messagesController.createMessage);
    }
}
exports.default = MessagesRoute;
//# sourceMappingURL=messages.route.js.map