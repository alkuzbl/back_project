"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
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
const userModel = (0, mongoose_1.model)('User', exports.userSchema);
exports.default = userModel;
//# sourceMappingURL=users.model.js.map