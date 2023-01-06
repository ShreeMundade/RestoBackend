import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E22ServiceBase } from "./base/e22.service.base";

@Injectable()
export class E22Service extends E22ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
