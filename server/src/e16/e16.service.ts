import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E16ServiceBase } from "./base/e16.service.base";

@Injectable()
export class E16Service extends E16ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
