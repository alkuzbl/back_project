"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class UserLoginDto {
}
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsEmail)(),
    (0, tslib_1.__metadata)("design:type", String)
], UserLoginDto.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, class_validator_1.IsString)(),
    (0, tslib_1.__metadata)("design:type", String)
], UserLoginDto.prototype, "password", void 0);
exports.UserLoginDto = UserLoginDto;
//# sourceMappingURL=user-login.dto.js.map