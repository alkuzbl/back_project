"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const auth_service_1 = (0, tslib_1.__importDefault)(require("../services/auth.service"));
const jsonwebtoken_1 = require("jsonwebtoken");
const _config_1 = require("../config");
class AuthController {
    constructor() {
        this.authService = new auth_service_1.default();
        this.signUp = async (req, res, next) => {
            try {
                const userData = req.body;
                await this.authService.signup(userData);
                res.status(201).json({ data: {}, message: 'You have successfully registered' });
            }
            catch (error) {
                next(error);
            }
        };
        this.logIn = async (req, res, next) => {
            try {
                const userData = req.body;
                const { cookie, findUser } = await this.authService.login(userData);
                res.setHeader('Set-Cookie', [cookie]);
                res.status(200).json({ data: findUser, message: 'login' });
            }
            catch (error) {
                next(error);
            }
        };
        this.logOut = async (req, res, next) => {
            try {
                const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null);
                if (Authorization) {
                    const verificationResponse = (await (0, jsonwebtoken_1.verify)(Authorization, _config_1.SECRET_KEY));
                    const userId = verificationResponse._id;
                    await this.authService.logout({ _id: userId });
                    res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
                    res.status(200).json({ data: {}, message: 'We are waiting for you again' });
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
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map