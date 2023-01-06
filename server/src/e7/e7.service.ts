import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E7ServiceBase } from "./base/e7.service.base";

@Injectable()
export class E7Service extends E7ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
