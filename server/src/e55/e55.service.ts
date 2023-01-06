import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E55ServiceBase } from "./base/e55.service.base";

@Injectable()
export class E55Service extends E55ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
