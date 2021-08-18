"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@tsed/common");
const HelloWorldController_1 = require("./HelloWorldController");
describe("HelloWorldController", () => {
    beforeEach(common_1.PlatformTest.create);
    afterEach(common_1.PlatformTest.reset);
    it("should do something", () => {
        const instance = common_1.PlatformTest.get(HelloWorldController_1.HelloWorldController);
        // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance
        expect(instance).toBeInstanceOf(HelloWorldController_1.HelloWorldController);
    });
});
//# sourceMappingURL=HelloWorldController.spec.js.map