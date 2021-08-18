"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const tslib_1 = require("tslib");
const di_1 = require("@tsed/di");
const common_1 = require("@tsed/common");
require("@tsed/platform-express"); // /!\ keep this import
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const compression_1 = tslib_1.__importDefault(require("compression"));
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const method_override_1 = tslib_1.__importDefault(require("method-override"));
const cors_1 = tslib_1.__importDefault(require("cors"));
require("@tsed/ajv");
require("@tsed/swagger");
const config_1 = require("./config");
const IndexController_1 = require("./controllers/pages/IndexController");
let Server = class Server {
    app;
    settings;
    $beforeRoutesInit() {
        this.app
            .use(cors_1.default())
            .use(cookie_parser_1.default())
            .use(compression_1.default({}))
            .use(method_override_1.default())
            .use(body_parser_1.default.json())
            .use(body_parser_1.default.urlencoded({
            extended: true
        }));
    }
};
tslib_1.__decorate([
    di_1.Inject(),
    tslib_1.__metadata("design:type", common_1.PlatformApplication)
], Server.prototype, "app", void 0);
tslib_1.__decorate([
    di_1.Configuration(),
    tslib_1.__metadata("design:type", Object)
], Server.prototype, "settings", void 0);
Server = tslib_1.__decorate([
    di_1.Configuration({
        ...config_1.config,
        acceptMimes: ["application/json"],
        httpPort: process.env.PORT || 8083,
        httpsPort: false,
        mount: {
            "/rest": [
                `${config_1.rootDir}/controllers/**/*.ts`
            ],
            "/": [IndexController_1.IndexCtrl]
        },
        swagger: [
            {
                path: "/v2/docs",
                specVersion: "2.0"
            },
            {
                path: "/v3/docs",
                specVersion: "3.0.1"
            }
        ],
        views: {
            root: `${config_1.rootDir}/../views`,
            viewEngine: "ejs"
        },
        exclude: [
            "**/*.spec.ts"
        ]
    })
], Server);
exports.Server = Server;
//# sourceMappingURL=Server.js.map