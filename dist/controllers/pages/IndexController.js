"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexCtrl = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@tsed/common");
const swagger_1 = require("@tsed/swagger");
const schema_1 = require("@tsed/schema");
let IndexCtrl = class IndexCtrl {
    swagger;
    get(protocol, host) {
        const hostUrl = `${protocol || "http"}://${host}`;
        return {
            BASE_URL: hostUrl,
            docs: this.swagger.map((conf) => {
                return {
                    url: hostUrl + conf.path,
                    ...conf
                };
            })
        };
    }
};
tslib_1.__decorate([
    common_1.Constant("swagger"),
    tslib_1.__metadata("design:type", Array)
], IndexCtrl.prototype, "swagger", void 0);
tslib_1.__decorate([
    common_1.Get("/"),
    common_1.View("index.ejs"),
    (schema_1.Returns(200, String).ContentType("text/html")),
    tslib_1.__param(0, common_1.HeaderParams("x-forwarded-proto")),
    tslib_1.__param(1, common_1.HeaderParams("host")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", void 0)
], IndexCtrl.prototype, "get", null);
IndexCtrl = tslib_1.__decorate([
    swagger_1.Hidden(),
    common_1.Controller("/")
], IndexCtrl);
exports.IndexCtrl = IndexCtrl;
//# sourceMappingURL=IndexController.js.map