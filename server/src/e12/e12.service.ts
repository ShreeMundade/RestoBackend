import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E12ServiceBase } from "./base/e12.service.base";

@Injectable()
export class E12Service extends E12ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
