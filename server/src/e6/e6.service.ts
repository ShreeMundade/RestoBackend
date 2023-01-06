import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E6ServiceBase } from "./base/e6.service.base";

@Injectable()
export class E6Service extends E6ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
