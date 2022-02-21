"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    constructor() {
        this.index = (req, res, next) => {
            try {
                res.sendStatus(200);
                //res.sendFile('/back_project/src/index.html');
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = IndexController;
//# sourceMappingURL=index.controller.js.map