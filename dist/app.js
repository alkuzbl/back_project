"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const compression_1 = (0, tslib_1.__importDefault)(require("compression"));
const cookie_parser_1 = (0, tslib_1.__importDefault)(require("cookie-parser"));
const cors_1 = (0, tslib_1.__importDefault)(require("cors"));
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const helmet_1 = (0, tslib_1.__importDefault)(require("helmet"));
const hpp_1 = (0, tslib_1.__importDefault)(require("hpp"));
const morgan_1 = (0, tslib_1.__importDefault)(require("morgan"));
const mongoose_1 = require("mongoose");
const swagger_jsdoc_1 = (0, tslib_1.__importDefault)(require("swagger-jsdoc"));
const swagger_ui_express_1 = (0, tslib_1.__importDefault)(require("swagger-ui-express"));
const _config_1 = require("./config");
const _databases_1 = require("./databases");
const error_middleware_1 = (0, tslib_1.__importDefault)(require("./middlewares/error.middleware"));
const logger_1 = require("./utils/logger");
const http_1 = (0, tslib_1.__importDefault)(require("http"));
const socket_io_1 = require("socket.io");
class App {
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.env = _config_1.NODE_ENV || 'development';
        this.port = _config_1.PORT || 3000;
        this.server = http_1.default.createServer(this.app);
        this.io = new socket_io_1.Server(this.server);
        this.connectToDatabase();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeSwagger();
        this.initializeErrorHandling();
        this.connectSocket();
    }
    listen() {
        this.server.listen(this.port, () => {
            logger_1.logger.info(`=================================`);
            logger_1.logger.info(`======= ENV: ${this.env} =======`);
            logger_1.logger.info(`🚀 App listening on the port ${this.port}`);
            logger_1.logger.info(`=================================`);
        });
    }
    getServer() {
        return this.server;
    }
    connectToDatabase() {
        if (this.env !== 'production') {
            (0, mongoose_1.set)('debug', true);
        }
        (0, mongoose_1.connect)(_databases_1.dbConnection.url, {});
    }
    connectSocket() {
        this.io.on('connection', socket => {
            console.log('a user connected');
        });
    }
    initializeMiddlewares() {
        this.app.use((0, morgan_1.default)(_config_1.LOG_FORMAT, { stream: logger_1.stream }));
        this.app.use((0, cors_1.default)({ origin: _config_1.ORIGIN, credentials: _config_1.CREDENTIALS }));
        this.app.use((0, hpp_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, compression_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_parser_1.default)());
    }
    initializeRoutes(routes) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }
    initializeSwagger() {
        const options = {
            swaggerDefinition: {
                info: {
                    title: 'REST API',
                    version: '1.0.0',
                    description: 'Example docs',
                },
            },
            apis: ['swagger.yaml'],
        };
        const specs = (0, swagger_jsdoc_1.default)(options);
        this.app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
    }
    initializeErrorHandling() {
        this.app.use(error_middleware_1.default);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map