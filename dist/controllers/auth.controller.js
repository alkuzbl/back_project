"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const auth_service_1 = (0, tslib_1.__importDefault)(require("@services/auth.service"));
class AuthController {
    constructor() {
        this.authService = new auth_service_1.default();
        this.signUp = async (req, res, next) => {
            try {
                const userData = req.body;
                await this.authService.signup(userData);
                res.status(201).json({ message: 'You have successfully registered' });
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
                const userId = req.user._id;
                console.log(userId);
                await this.authService.logout({ _id: userId });
                res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
                res.status(200).json({ message: 'We are waiting for you again' });
            }
            catch (error) {
                next(error);
            }
        };
        this.me = async (req, res, next) => {
            try {
                res.status(200).json({ data: req.user, message: 'Authorized' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map