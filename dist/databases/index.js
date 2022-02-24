"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const _config_1 = require("@config");
exports.dbConnection = {
    url: `mongodb+srv://${_config_1.DB_USER}:${_config_1.DB_PASSWORD}@cluster0.cwd26.mongodb.net/${_config_1.DB_DATABASE}?retryWrites=true&w=majority`,
};
//# sourceMappingURL=index.js.map