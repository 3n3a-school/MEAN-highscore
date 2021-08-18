import { OnInit, OnDestroy } from "@tsed/common";
import { PrismaClient } from "@prisma/client";
export declare class PrismaService extends PrismaClient implements OnInit, OnDestroy {
    $onInit(): Promise<void>;
    $onDestroy(): Promise<void>;
}
