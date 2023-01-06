import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E27ServiceBase } from "./base/e27.service.base";

@Injectable()
export class E27Service extends E27ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
