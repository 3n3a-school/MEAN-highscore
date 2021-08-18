"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@tsed/common");
const di_1 = require("@tsed/di");
const PrismaService_1 = require("../services/PrismaService");
const schema_1 = require("@tsed/schema");
const client_1 = require("@prisma/client");
class hsModel {
    id;
    score;
    name;
}
tslib_1.__decorate([
    schema_1.Required(),
    schema_1.Groups("!creation"),
    tslib_1.__metadata("design:type", Number)
], hsModel.prototype, "id", void 0);
tslib_1.__decorate([
    schema_1.Required(),
    tslib_1.__metadata("design:type", Number)
], hsModel.prototype, "score", void 0);
tslib_1.__decorate([
    schema_1.Required(),
    tslib_1.__metadata("design:type", String)
], hsModel.prototype, "name", void 0);
let UsersController = class UsersController {
    prisma;
    async getUser(id) {
        return this.prisma.highscores.findUnique({ where: { id } });
    }
    async signupUser(user) {
        return this.prisma.highscores.create({ data: user });
    }
    getUsers() {
        return this.prisma.highscores.findMany();
    }
};
tslib_1.__decorate([
    di_1.Inject(),
    tslib_1.__metadata("design:type", PrismaService_1.PrismaService)
], UsersController.prototype, "prisma", void 0);
tslib_1.__decorate([
    common_1.Get("/:id"),
    schema_1.Summary("Return a user by his name"),
    schema_1.Returns(200, hsModel),
    tslib_1.__param(0, common_1.PathParams("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
tslib_1.__decorate([
    common_1.Post("/"),
    schema_1.Summary("Upload a new highscore of a user"),
    schema_1.Returns(201, hsModel),
    tslib_1.__param(0, common_1.BodyParams()),
    tslib_1.__param(0, schema_1.Groups("creation")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_1.highscores !== "undefined" && client_1.highscores) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "signupUser", null);
tslib_1.__decorate([
    common_1.Get("/"),
    schema_1.Summary("Return a list of User"),
    (schema_1.Returns(200, Array).Of(hsModel)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
UsersController = tslib_1.__decorate([
    common_1.Controller("/highscores")
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=HighscoresController.js.map