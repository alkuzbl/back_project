"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const users_service_1 = (0, tslib_1.__importDefault)(require("../services/users.service"));
const _config_1 = require("../config");
const jsonwebtoken_1 = require("jsonwebtoken");
class UsersController {
    constructor() {
        this.userService = new users_service_1.default();
        this.getUsers = async (req, res, next) => {
            try {
                const findAllUsersData = await this.userService.findAllUser();
                res.status(200).json({ data: findAllUsersData, message: 'findAll' });
            }
            catch (error) {
                next(error);
            }
        };
        this.getUserById = async (req, res, next) => {
            try {
                const userId = req.params.id;
                const findOneUserData = await this.userService.findUserById(userId);
                res.status(200).json({ data: findOneUserData, message: 'findOne' });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateUser = async (req, res, next) => {
            try {
                const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null);
                if (Authorization) {
                    const verificationResponse = (await (0, jsonwebtoken_1.verify)(Authorization, _config_1.SECRET_KEY));
                    const userData = req.body;
                    await this.userService.updateUser(verificationResponse._id, userData);
                    res.status(200).json({ data: {}, message: 'Your data has been successfully updated' });
                }
                else {
                    res.status(401).json({ message: 'Wrong authentication token' });
                }
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteUser = async (req, res, next) => {
            try {
                const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null);
                if (Authorization) {
                    const verificationResponse = (await (0, jsonwebtoken_1.verify)(Authorization, _config_1.SECRET_KEY));
                    await this.userService.deleteUser(verificationResponse._id);
                    res.status(200).json({ data: {}, message: 'We are very sorry that you are not with us :(' });
                }
                else {
                    res.status(401).json({ message: 'Wrong authentication token' });
                }
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = UsersController;
//# sourceMappingURL=users.controller.js.map