"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@tsed/common");
let HelloWorldController = class HelloWorldController {
    get() {
        return "hello";
    }
};
tslib_1.__decorate([
    common_1.Get("/"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], HelloWorldController.prototype, "get", null);
HelloWorldController = tslib_1.__decorate([
    common_1.Controller("/hello-world")
], HelloWorldController);
exports.HelloWorldController = HelloWorldController;
//# sourceMappingURL=HelloWorldController.js.map