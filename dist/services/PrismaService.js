"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@tsed/common");
const client_1 = require("@prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async $onInit() {
        await this.$connect();
    }
    async $onDestroy() {
        await this.$disconnect();
    }
};
PrismaService = tslib_1.__decorate([
    common_1.Injectable()
], PrismaService);
exports.PrismaService = PrismaService;
//# sourceMappingURL=PrismaService.js.map