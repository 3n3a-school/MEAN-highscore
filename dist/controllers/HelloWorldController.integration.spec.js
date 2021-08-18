"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@tsed/common");
const supertest_1 = tslib_1.__importDefault(require("supertest"));
const HelloWorldController_1 = require("./HelloWorldController");
const Server_1 = require("../Server");
describe("HelloWorldController", () => {
    let request;
    beforeEach(common_1.PlatformTest.bootstrap(Server_1.Server, {
        mount: {
            "/": [HelloWorldController_1.HelloWorldController]
        }
    }));
    beforeEach(() => {
        request = supertest_1.default(common_1.PlatformTest.callback());
    });
    afterEach(common_1.PlatformTest.reset);
    it("should call GET /hello-world", async () => {
        const response = await request.get("/hello-world").expect(200);
        expect(response.text).toEqual("hello");
    });
});
//# sourceMappingURL=HelloWorldController.integration.spec.js.map