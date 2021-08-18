import {BodyParams, Controller, Get, PathParams, Post} from "@tsed/common";
import {Inject} from "@tsed/di";
import {PrismaService} from "../services/PrismaService";
import {Groups, Required, Email, Returns, Summary} from "@tsed/schema";
import {highscores} from "@prisma/client";

class hsModel implements highscores {
  @Required()
  @Groups("!creation")
  id: number;

  @Required()
  score: number;

  @Required()
  name: string;
}

@Controller("/highscores")
export class UsersController {
  @Inject()
  protected prisma: PrismaService;

  @Get("/:id")
  @Summary("Return a user by his name")
  @Returns(200, hsModel)
  async getUser(@PathParams("id") id: number) {
    return this.prisma.highscores.findUnique({where: {id}});
  }

  @Post("/")
  @Summary("Upload a new highscore of a user")
  @Returns(201, hsModel)
  async signupUser(@BodyParams() @Groups("creation") user: highscores) {
    return this.prisma.highscores.create({data: user});
  }

  @Get("/")
  @Summary("Return a list of User")
  @(Returns(200, Array).Of(hsModel))
  getUsers() {
    return this.prisma.highscores.findMany();
  }
}