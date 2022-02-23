"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = require("bcrypt");
const HttpException_1 = require("../exceptions/HttpException");
const users_model_1 = (0, tslib_1.__importDefault)(require("../models/users.model"));
const util_1 = require("../utils/util");
class UserService {
    constructor() {
        this.users = users_model_1.default;
    }
    async findAllUser() {
        const users = await this.users.find();
        return users;
    }
    async findUserById(userId) {
        if ((0, util_1.isEmpty)(userId))
            throw new HttpException_1.HttpException(400, "You're not userId");
        const findUser = await this.users.findOne({ _id: userId });
        if (!findUser)
            throw new HttpException_1.HttpException(409, "You're not user");
        return findUser;
    }
    async createUser(userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new HttpException_1.HttpException(400, "You're not userData");
        const findUser = await this.users.findOne({ email: userData.email });
        if (findUser)
            throw new HttpException_1.HttpException(409, `You're email ${userData.email} already exists`);
        const hashedPassword = await (0, bcrypt_1.hash)(userData.password, 10);
        const createUserData = await this.users.create(Object.assign(Object.assign({}, userData), { password: hashedPassword }));
        return createUserData;
    }
    async updateUser(userId, userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new HttpException_1.HttpException(400, "You're not userData");
        if (userData.email) {
            const findUser = await this.users.findOne({ email: userData.email });
            if (findUser && findUser._id !== userId)
                throw new HttpException_1.HttpException(409, `You're email ${userData.email} already exists`);
        }
        if (userData.password) {
            const hashedPassword = await (0, bcrypt_1.hash)(userData.password, 10);
            userData = Object.assign(Object.assign({}, userData), { password: hashedPassword });
        }
        const updateUserById = await this.users.findByIdAndUpdate({ _id: userId }, userData);
        if (!updateUserById)
            throw new HttpException_1.HttpException(409, "You're not user");
        return updateUserById;
    }
    async deleteUser(userId) {
        const deleteUserById = await this.users.findByIdAndDelete({ _id: userId });
        if (!deleteUserById)
            throw new HttpException_1.HttpException(409, "You're not user");
        return deleteUserById;
    }
}
exports.default = UserService;
//# sourceMappingURL=users.service.js.map