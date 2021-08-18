"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@tsed/common");
const supertest_1 = tslib_1.__importDefault(require("supertest"));
const Server_1 = require("./Server");
describe("Server", () => {
    let request;
    beforeEach(common_1.PlatformTest.bootstrap(Server_1.Server));
    beforeEach(() => {
        request = supertest_1.default(common_1.PlatformTest.callback());
    });
    afterEach(common_1.PlatformTest.reset);
    it("should call GET /rest", async () => {
        const response = await request.get("/rest").expect(404);
        expect(response.body).toEqual({
            errors: [],
            message: 'Resource "/rest" not found',
            name: "NOT_FOUND",
            status: 404,
        });
    });
});
//# sourceMappingURL=Server.integration.spec.js.map