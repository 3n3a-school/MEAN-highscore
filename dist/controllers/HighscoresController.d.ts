import { PrismaService } from "../services/PrismaService";
import { highscores } from "@prisma/client";
export declare class UsersController {
    protected prisma: PrismaService;
    getUser(id: number): Promise<highscores | null>;
    signupUser(user: highscores): Promise<highscores>;
    getUsers(): import(".prisma/client").PrismaPromise<highscores[]>;
}
