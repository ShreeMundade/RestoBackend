import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E45ServiceBase } from "./base/e45.service.base";

@Injectable()
export class E45Service extends E45ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
