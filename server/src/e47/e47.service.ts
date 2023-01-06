import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { E47ServiceBase } from "./base/e47.service.base";

@Injectable()
export class E47Service extends E47ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
