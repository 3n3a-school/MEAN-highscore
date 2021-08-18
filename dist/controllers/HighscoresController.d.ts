import { PrismaService } from "../services/PrismaService";
import { highscores } from "@prisma/client";
export declare class UsersController {
    protected prisma: PrismaService;
    getUser(id: number): Promise<any>;
    signupUser(user: highscores): Promise<any>;
    getUsers(): any;
}
