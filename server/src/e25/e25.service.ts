import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E25ServiceBase } from "./base/e25.service.base";

@Injectable()
export class E25Service extends E25ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
