import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E42ServiceBase } from "./base/e42.service.base";

@Injectable()
export class E42Service extends E42ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
